import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { NavigationContainer } from "./container/navigation.container";

const routes: Routes = [
  { path: "", component: NavigationContainer }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NavigationRoutingModule {
  static components = [NavigationContainer]
 }