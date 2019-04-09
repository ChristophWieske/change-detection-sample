import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    component: DashboardComponent,
    path: 'dashboard'
  }, {
    component: ProfileComponent,
    path: 'profile'
  }, {
    component: ProjectsComponent,
    path: 'projects'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
