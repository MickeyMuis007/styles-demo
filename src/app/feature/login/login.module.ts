import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [LoginRoutingModule.components],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }