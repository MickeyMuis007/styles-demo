import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Containers
import { SliderComponent } from "./container/slider/slider.component";

// Components
import { Slider1Component } from "./component/slider1/slider1.component";
import { SliderMenuComponent } from "./component/slider-menu/slider-menu.component";

const routes: Routes = [
  { path: "", component: SliderComponent },
  { path: "slider1", component: Slider1Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SliderRoutingModule {
  static components = [ SliderComponent, SliderMenuComponent, Slider1Component ];
}
