import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { PostComponent } from './post/post.component'
import { ArchivesComponent } from './archives/archives.component'
import { MomentModule } from 'ngx-moment'
import { MomentTimezoneModule } from '../shared/moment-timezone/moment-timezone.module'

const blogRoutes: Routes = [
  { path: '', component: ArchivesComponent, pathMatch: 'full' },
  { path: 'post/:slug', component: PostComponent },
]

@NgModule({
  declarations: [ArchivesComponent, PostComponent],
  imports: [
    CommonModule,
    MomentModule,
    MomentTimezoneModule,
    RouterModule.forChild(blogRoutes),
  ],
})
export class BlogModule {}
