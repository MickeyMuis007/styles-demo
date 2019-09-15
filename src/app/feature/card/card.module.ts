import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from "./card-routing.module";



@NgModule({
  declarations: [ CardRoutingModule.components ],
  imports: [
    CommonModule,
    CardRoutingModule
  ]
})
export class CardModule { }
