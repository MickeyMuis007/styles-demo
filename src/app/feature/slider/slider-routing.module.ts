import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Containers
import { SliderComponent } from "./containers/slider/slider.component";
import { SliderMenuComponent } from "./containers/slider-menu/slider-menu.component";

// Components
import { Slider1Component } from "./components/slider1/slider1.component";

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
