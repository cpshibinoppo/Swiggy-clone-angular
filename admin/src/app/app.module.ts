import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogingComponent } from './pages/loging/loging.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TopbarComponent } from './layout/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LogingComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
