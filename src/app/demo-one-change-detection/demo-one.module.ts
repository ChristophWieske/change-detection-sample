import { MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material/';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Demo1Component } from './demo-one-change-detection.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';

const routes: Routes = [
  {
    path: '',
    component: Demo1Component
  }
];

@NgModule({
  declarations: [
    Demo1Component,
    TreeNodeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule ,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class Demo1Module { }
