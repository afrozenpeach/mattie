import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardgamesComponent } from './boardgames/boardgames.component';
import { RouterModule, Routes } from '@angular/router';

const boardgamesRoutes: Routes = [
  { path: '', component: BoardgamesComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [BoardgamesComponent],
  imports: [
    CommonModule,RouterModule.forChild(boardgamesRoutes)
  ]
})
export class BoardgamesModule { }