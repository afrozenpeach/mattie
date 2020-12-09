import { Component, OnDestroy, OnInit } from '@angular/core'
import { SinglePostQuery, SinglePostGQL } from 'src/generated/graphql'
import { Observable, Subscription } from 'rxjs'
import { map } from 'rxjs/operators'
import { ActivatedRoute, Router } from '@angular/router'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { OembedService } from 'src/app/shared/oembed/oembed.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
  post: Observable<SinglePostQuery['blogPosts']> | undefined
  postSubscription: Subscription | undefined
  postContent: SafeHtml | undefined
  oembedSubscriptions: Subscription[] = []

  constructor(
    private postGQL: SinglePostGQL,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private oembedService: OembedService,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      const slug = params['slug']
      const where = {
        slug: slug,
      }

      this.post = this.postGQL
        .watch({ whereClause: where })
        .valueChanges.pipe(map((result) => result.data.blogPosts))

      this.postSubscription = this.post.subscribe((result) => {
        if (result?.length) {
          let workingContent = result[0]?.content.replace(
            'src="/uploads/',
            'src="https://cms.mattie.lgbt/uploads/'
          )

          if (workingContent) {
            this.postContent = this.sanitizer.bypassSecurityTrustHtml(
              workingContent
            )

            for (const match of workingContent.matchAll(
              this.oembedService.oembedRegex
            )) {
              let oembedSubscription = this.oembedService
                .getOembed(match[1])
                .subscribe((oembed) => {
                  workingContent = workingContent?.replace(
                    match[0],
                    oembed.html
                  )

                  if (workingContent) {
                    this.postContent = this.sanitizer.bypassSecurityTrustHtml(
                      workingContent
                    )
                  }
                })

              this.oembedSubscriptions.push(oembedSubscription)
            }
          }
        } else {
          this.router.navigate(['/404'])
        }
      })
    })
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.postSubscription?.unsubscribe()

    for (const subscription of this.oembedSubscriptions) {
      subscription.unsubscribe()
    }
  }
}
