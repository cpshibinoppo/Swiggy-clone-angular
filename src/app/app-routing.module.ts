import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { NotloginComponent } from './static/notlogin/notlogin.component';

const routes: Routes = [
  {path:'',component:NotloginComponent},
  {path:'location',component:NavbarComponent},
  {path:'home',component:HomeComponent},
  {path:'home/restaurant',component:RestaurantComponent},
  {path:'home/cart',component:CartComponent, data: {con: 'some value'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
