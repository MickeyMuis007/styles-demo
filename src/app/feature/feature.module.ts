import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FeatureRoutingModule } from './feature-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [FeatureRoutingModule.components],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class FeatureModule { }
