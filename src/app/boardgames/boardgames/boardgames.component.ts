import { Component, OnDestroy, OnInit } from '@angular/core'
import { BoardgamesQuery, BoardgamesGQL } from 'src/generated/graphql'
import { Observable, Subscription } from 'rxjs'
import { map } from 'rxjs/operators'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { Router } from '@angular/router'

@Component({
  selector: 'app-boardgames',
  templateUrl: './boardgames.component.html',
  styleUrls: ['./boardgames.component.scss'],
})
export class BoardgamesComponent implements OnInit, OnDestroy {
  boardgames: Observable<BoardgamesQuery['boardGames']> | undefined
  boardgamesSubscription: Subscription | undefined
  boardgamesContent: SafeHtml[] = []

  constructor(
    private boardgamesGQL: BoardgamesGQL,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {
    this.boardgames = this.boardgamesGQL
      .watch()
      .valueChanges.pipe(map((result) => result.data.boardGames))

    this.boardgamesSubscription = this.boardgames.subscribe((result) => {
      result?.forEach((g, i) => {
        let workingContent = g?.content.replace(
          'src="/uploads/',
          'src="https://cms.mattie.lgbt/uploads/'
        )

        if (workingContent) {
          this.boardgamesContent[i] = this.sanitizer.bypassSecurityTrustHtml(
            workingContent
          )
        }
      })
    })
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.boardgamesSubscription?.unsubscribe()
  }

  redirect(url: string | null | undefined) {
    if (url) {
      if (url.startsWith('http')) {
        window.open(url)
      } else {
        this.router.navigate([url])
      }
    }
  }
}
