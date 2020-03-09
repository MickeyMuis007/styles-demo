import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { LoginContainer } from "./container/login.container";
import { Login1Component } from './component/login-1/login-1.component';

const routes: Routes = [
  { path: "", component: LoginContainer },
  { path: "login-1", component: Login1Component }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginRoutingModule {
  static components = [LoginContainer, Login1Component];
 }