import { InjectionToken, NgModule } from '@angular/core'
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router'
import { NotfoundComponent } from './shared/notfound/notfound.component'
import { RedirectionMessageComponent } from './shared/redirection-message/redirection-message.component'

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver')

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
  {
    path: 'externalRedirect',
    resolve: {
      url: externalUrlProvider,
    },
    component: RedirectionMessageComponent,
  },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' },
]

@NgModule({
  providers: [
    {
      provide: externalUrlProvider,
      useValue: (route: ActivatedRouteSnapshot) => {
        const externalUrl = route.paramMap.get('externalUrl')
        if (externalUrl) {
          window.open(externalUrl, '_blank')
        }
      },
    },
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
