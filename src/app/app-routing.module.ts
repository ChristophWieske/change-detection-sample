import { Demo2Component } from './demo-two-observables-and-pipes/demo-two-observables-and-pipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Demo1Component } from './demo-one-change-detection/demo-one-change-detection.component';
import { Demo3Component } from './demo-three-the-dom/demo-three-the-dom.component';
import { Demo4Component } from './demo-four-lazy-loading/demo-four-lazy-loading.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    loadChildren: './demo-one-change-detection/demo-one.module#Demo1Module',
    path: 'demo-1'
  }, {
    loadChildren: './demo-two-observables-and-pipes/demo-two.module#Demo2Module',
    path: 'demo-2'
  }, {
    loadChildren: './demo-three-the-dom/demo-three.module#Demo3Module',
    path: 'demo-3'
  }, {
    loadChildren: './demo-four-lazy-loading/demo-four.module#Demo4Module',
    path: 'demo-4'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
