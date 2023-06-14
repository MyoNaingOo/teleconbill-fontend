import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterOtpComponent } from './otp/register-otp/register-otp.component';
import { LoginOtpComponent } from './otp/login-otp/login-otp.component';
import { BillsComponent } from './bills/bills.component';
import { UserbillsComponent } from './userbills/userbills.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "login-otp",component: LoginOtpComponent},
  {path:"register-otp",component: RegisterOtpComponent},
  {path:"bills" , component:BillsComponent },
  {path:"userbills" ,component:UserbillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
