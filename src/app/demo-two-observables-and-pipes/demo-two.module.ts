import { NgModule } from '@angular/core';
import { MatButtonModule, MatDividerModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule } from '@angular/material/';
import { Demo2Component } from './demo-two-observables-and-pipes.component';
import { FormsModule } from '@angular/forms';
import { Demo2PurePipe } from './demo-two-pipe';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: Demo2Component
  }
];

@NgModule({
  declarations: [
    Demo2Component,
    Demo2PurePipe
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class Demo2Module { }
