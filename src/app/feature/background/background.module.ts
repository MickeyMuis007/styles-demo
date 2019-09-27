import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BackgroundRoutingModule } from "./background-routing.module";

@NgModule({
  declarations: [BackgroundRoutingModule.components],
  imports: [
    CommonModule,
    BackgroundRoutingModule
  ]
})
export class BackgroundModule { }