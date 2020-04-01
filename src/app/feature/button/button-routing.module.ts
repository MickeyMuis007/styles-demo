import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import {  ButtonContainer } from "./container/button/button.container";
import { SearchButtonComponent } from "./component/search-button/search-button.component";
import { NeumorphismRadioButtonComponent } from './component/neumorphism-radio-button/neumorphism-radio-button.component';

const routes: Routes = [
  { path: "", component: ButtonContainer },
  { path: "search-button", component: SearchButtonComponent },
  { path: "neumorphism-radio-button", component: NeumorphismRadioButtonComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ButtonRoutingModule {
  static component = [ ButtonContainer, SearchButtonComponent, NeumorphismRadioButtonComponent ]
}
