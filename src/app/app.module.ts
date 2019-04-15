import { BadgeComponent } from './badge/badge.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule, MatButtonModule, MatDividerModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatSlideToggleModule } from '@angular/material/';
import { FormsModule } from '@angular/forms';
import { Demo3Component } from './demo-three-the-dom/demo-three-the-dom.component';
import { FeatureItemComponent } from './demo-three-the-dom/feature-item/feature-item.component';


@NgModule({
  declarations: [
    BadgeComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
