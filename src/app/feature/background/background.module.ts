import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BackgroundRoutingModule } from "./background-routing.module";
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BackgroundRoutingModule.components],
  imports: [
    CommonModule,
    BackgroundRoutingModule,
    SharedModule
  ]
})
export class BackgroundModule { }