import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BoardgamesComponent } from './boardgames/boardgames.component'
import { RouterModule, Routes } from '@angular/router'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'

const boardgamesRoutes: Routes = [
  { path: '', component: BoardgamesComponent, pathMatch: 'full' },
]

@NgModule({
  declarations: [BoardgamesComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(boardgamesRoutes),
  ],
})
export class BoardgamesModule {}
