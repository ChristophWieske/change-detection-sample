import { BadgeComponent } from './badge/badge.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule, MatButtonModule, MatDividerModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material/';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { OrgNodeComponent } from './org-node/org-node.component';

@NgModule({
  declarations: [
    AppComponent,
    BadgeComponent,
    DashboardComponent,
    ProfileComponent,
    ProjectsComponent,
    OrgNodeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
