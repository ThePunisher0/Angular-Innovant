import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../auth/component/login-page/login-page.component';
import { LoginDetailsComponent } from './component/login-details/login-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'login-details', component: LoginDetailsComponent },
  { path: '**', redirectTo: 'login-page' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
