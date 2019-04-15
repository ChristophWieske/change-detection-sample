import { MatCardModule, MatDividerModule, MatSlideToggleModule, MatButtonModule } from '@angular/material/';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Demo3Component } from './demo-three-the-dom.component';
import { FeatureItemComponent } from './feature-item/feature-item.component';

const routes: Routes = [
  {
    path: '',
    component: Demo3Component
  }
];

@NgModule({
  declarations: [
    Demo3Component,
    FeatureItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class Demo3Module { }
