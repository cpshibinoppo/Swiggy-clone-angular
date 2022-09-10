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
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { NotloginComponent } from './static/notlogin/notlogin.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { CartComponent } from './pages/cart/cart.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { SearchComponent } from './pages/search/search.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { OffersComponent } from './pages/offers/offers.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { UserComponent } from './pages/user/user.component';
import { SubnabhomeComponent } from './layout/subnabhome/subnabhome.component';


const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [AppComponent,FooterComponent,HomeComponent, SignupComponent, LoginComponent, NotloginComponent, NavbarComponent, RestaurantComponent, CartComponent, SearchComponent, OffersComponent, UserComponent, SubnabhomeComponent],
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
    ReactiveFormsModule,
    MatTabsModule,
    NgxMaskModule.forRoot(maskConfigFunction),
    MatTooltipModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
