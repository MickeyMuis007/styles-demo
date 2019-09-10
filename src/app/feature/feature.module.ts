import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FeatureRoutingModule } from './feature-routing.module';



@NgModule({
  declarations: [FeatureRoutingModule.components],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FontAwesomeModule
  ]
})
export class FeatureModule { }
