import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { map } from 'rxjs/operators'
import { FeaturedPostsGQL, FeaturedPostsQuery } from 'src/generated/graphql'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit, OnDestroy {
  featuredPosts: Observable<FeaturedPostsQuery['blogPosts']> | undefined
  featuredPostsSubscription: Subscription | undefined

  constructor(
    private featuredPostsGQL: FeaturedPostsGQL,
    private router: Router
  ) {
    this.featuredPosts = this.featuredPostsGQL
      .watch()
      .valueChanges.pipe(map((result) => result.data.blogPosts))
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

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
