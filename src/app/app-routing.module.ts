import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./homepage/homepage.module').then((m) => m.HomepageModule),
        pathMatch: 'full',
    },
    {
        path: 'blog',
        loadChildren: () =>
            import('./blog/blog.module').then((m) => m.BlogModule)
    },
    {
        path: 'boardgames',
        loadChildren: () =>
            import('./boardgames/boardgames.module').then(
                (m) => m.BoardgamesModule
            )
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
