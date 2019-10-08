import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderRoutingModule } from './slider-routing.module';

@NgModule({
  declarations: [ SliderRoutingModule.components ],
  imports: [
    CommonModule,
    SliderRoutingModule
  ]
})
export class SliderModule { }
