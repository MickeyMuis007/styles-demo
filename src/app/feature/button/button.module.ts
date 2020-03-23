import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonRoutingModule } from "./button-routing.module";
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ ButtonRoutingModule.component ],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    SharedModule
  ]
})
export class ButtonModule { }
