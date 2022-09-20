import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LogingComponent } from './pages/loging/loging.component';

const routes: Routes = [
  {path:'',component:LogingComponent},
  {path:'dashboard',component:HomeComponent},
  {path:'n',component:NavbarComponent},
  {path:'a',component:TopbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
