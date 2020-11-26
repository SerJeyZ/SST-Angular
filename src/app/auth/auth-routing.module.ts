import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AuthComponent } from './auth.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration.component';
import { ResetStep2PageComponent } from './reset-step2-page/reset-step2-page.component';
import { ResetPageComponent } from './reset-page/reset-page.component';

const routes: Routes = [
  {path:'', component:AuthComponent, children:[
    { path: 'login', component: LoginPageComponent },
    { path: 'registration', component: RegistrationPageComponent },
    { path: 'reset', component: ResetPageComponent },
    { path: 'reset-step2', component: ResetStep2PageComponent },
  ]}
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }