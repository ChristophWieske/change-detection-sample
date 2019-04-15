import { MatCardModule, MatDividerModule } from '@angular/material/';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Demo4Component } from './demo-four-lazy-loading.component';

const routes: Routes = [
  {
    path: '',
    component: Demo4Component
  }
];

@NgModule({
  declarations: [
    Demo4Component
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    RouterModule.forChild(routes)
  ]
})
export class Demo4Module { }
