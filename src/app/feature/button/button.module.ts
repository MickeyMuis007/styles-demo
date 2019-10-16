import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonRoutingModule } from "./button-routing.module";

@NgModule({
  declarations: [ ButtonRoutingModule.component ],
  imports: [
    CommonModule,
    ButtonRoutingModule
  ]
})
export class ButtonModule { }
