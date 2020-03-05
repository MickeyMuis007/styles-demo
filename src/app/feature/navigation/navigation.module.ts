import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NavigationRoutingModule } from "./navigation-routing.module";
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NavigationRoutingModule.components],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    SharedModule
  ]
})
export class NavigationModule { }