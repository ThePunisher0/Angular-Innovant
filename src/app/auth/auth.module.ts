import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './component/login-page/login-page.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthRoutingModule, LoginPageComponent],
})
export class AuthModule {}
