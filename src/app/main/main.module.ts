import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LoginPageComponent } from '../auth/component/login-page/login-page.component';
import { LoginDetailsComponent } from './component/login-details/login-details.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule,
    LoginPageComponent,
    LoginDetailsComponent,
  ],
})
export class MainModule {}
