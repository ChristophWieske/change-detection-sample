import { BadgeComponent } from './badge/badge.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule, MatButtonModule, MatDividerModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule } from '@angular/material/';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { Demo1Component } from './demo-one-change-detection/demo-one-change-detection.component';
import { Demo2Component } from './demo-two-observables-and-pipes/demo-two-observables-and-pipes.component';
import { FormsModule } from '@angular/forms';
import { Demo2PurePipe } from './demo-two-observables-and-pipes/demo-two-pipe';


@NgModule({
  declarations: [
    AppComponent,
    BadgeComponent,
    Demo1Component,
    Demo2Component,
    TreeNodeComponent,
    Demo2PurePipe
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
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
