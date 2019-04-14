import { Demo2Component } from './demo-two-observables-and-pipes/demo-two-observables-and-pipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Demo1Component } from './demo-one-change-detection/demo-one-change-detection.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    component: Demo1Component,
    path: 'demo-1'
  }, {
    component: Demo2Component,
    path: 'demo-2'
  }, {
    component: Demo2Component,
    path: 'demo-3'
  }, {
    component: Demo2Component,
    path: 'demo-4'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
