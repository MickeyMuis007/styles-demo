import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderRoutingModule } from './slider-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ SliderRoutingModule.components ],
  imports: [
    CommonModule,
    SliderRoutingModule,
    SharedModule
  ]
})
export class SliderModule { }
