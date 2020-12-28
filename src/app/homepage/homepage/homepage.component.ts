import { Component, OnDestroy, OnInit } from '@angular/core'
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

  constructor(private featuredPostsGQL: FeaturedPostsGQL) {
    this.featuredPosts = this.featuredPostsGQL
      .watch()
      .valueChanges.pipe(map((result) => result.data.blogPosts))
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
