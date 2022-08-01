import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './pages/location/location.component';
import { NotloginComponent } from './static/notlogin/notlogin.component';

const routes: Routes = [
  {path:'',component:NotloginComponent},
  {path:'location',component:LocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
