import { BadgeComponent } from './badge/badge.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule, MatButtonModule, MatDividerModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material/';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { Demo1Component } from './demo-1-change-detection/demo-1-change-detection.component';


@NgModule({
  declarations: [
    AppComponent,
    BadgeComponent,
    Demo1Component,
    ProfileComponent,
    ProjectsComponent,
    TreeNodeComponent
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
