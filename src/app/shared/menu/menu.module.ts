import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MenuRoutingModule } from "./menu-routing.module";

@NgModule({
  declarations: [ MenuRoutingModule.components ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  exports: [
    MenuRoutingModule.components
  ]
})
export class MenuModule { }