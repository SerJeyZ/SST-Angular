import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration.component';
import { ResetPageComponent } from './reset-page/reset-page.component';
import { ResetStep2PageComponent } from './reset-step2-page/reset-step2-page.component';

@NgModule({
  declarations:[
    LoginPageComponent,
    RegistrationPageComponent,
    AuthComponent,
    ResetPageComponent,
    ResetStep2PageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule {}