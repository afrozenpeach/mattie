import { InjectionToken, NgModule } from '@angular/core'
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router'
import { NotfoundComponent } from './shared/notfound/notfound.component'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./homepage/homepage.module').then((m) => m.HomepageModule),
    pathMatch: 'full',
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'boardgames',
    loadChildren: () =>
      import('./boardgames/boardgames.module').then((m) => m.BoardgamesModule),
  },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
