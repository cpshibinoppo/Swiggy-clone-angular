import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './layout/footer/footer.component';
import { LocationComponent } from './pages/location/location.component';
import { HomeComponent } from './pages/home/home.component';
import { LogingandsignupComponent } from './pages/logingandsignup/logingandsignup.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
@NgModule({
  declarations: [AppComponent,FooterComponent, LocationComponent, HomeComponent, LogingandsignupComponent, SignupComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    GooglePlaceModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
