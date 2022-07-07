import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OtpComponent } from './otp/otp.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {
    path:"home" , component:HomeComponent
  },
  {
    path:"otp" , component:OtpComponent
  },
  {
    path:'success' , component:SuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
