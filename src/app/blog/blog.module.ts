import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { PostComponent } from './post/post.component'
import { ArchivesComponent } from './archives/archives.component'

const blogRoutes: Routes = [
  { path: '', component: ArchivesComponent, pathMatch: 'full' },
  { path: 'post/:slug', component: PostComponent },
]

@NgModule({
  declarations: [ArchivesComponent, PostComponent],
  imports: [CommonModule, RouterModule.forChild(blogRoutes)],
})
export class BlogModule {}
