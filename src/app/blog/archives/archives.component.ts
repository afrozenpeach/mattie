import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsQuery, PostsGQL } from 'src/generated/graphql';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {

  posts: Observable<PostsQuery['blogPosts']>

  constructor(private postsGQL: PostsGQL) {
    this.posts = postsGQL.watch().valueChanges.pipe(map(result => result.data.blogPosts))
  }

  ngOnInit(): void {
  }

}
