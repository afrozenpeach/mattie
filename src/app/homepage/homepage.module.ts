import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomepageComponent } from './homepage/homepage.component'
import { RouterModule, Routes } from '@angular/router'
import { MatCardModule } from '@angular/material/card'
import { MomentModule } from 'ngx-moment'
import { MomentTimezoneModule } from '../shared/moment-timezone/moment-timezone.module'
import { MatButtonModule } from '@angular/material/button'

const homepageRoutes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
]

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MomentModule,
    MomentTimezoneModule,
    MatButtonModule,
    RouterModule.forChild(homepageRoutes),
  ],
})
export class HomepageModule {}
