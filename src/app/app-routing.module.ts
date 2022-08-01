import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './pages/location/location.component';
import { LogingandsignupComponent } from './pages/logingandsignup/logingandsignup.component';

const routes: Routes = [
  {path:"",component:LogingandsignupComponent},
  {path:'location',component:LocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
