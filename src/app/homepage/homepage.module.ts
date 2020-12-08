import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomepageComponent } from './homepage/homepage.component'
import { RouterModule, Routes } from '@angular/router'

const homepageRoutes: Routes = [
    { path: '', component: HomepageComponent, pathMatch: 'full' }
]

@NgModule({
    declarations: [HomepageComponent],
    imports: [CommonModule, RouterModule.forChild(homepageRoutes)],
})
export class HomepageModule {}
