import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { NavigationContainer } from "./container/navigation.container";
import { Nav1Component } from './component/nav-1/nav-1.component';

const routes: Routes = [
  { path: "", component: NavigationContainer },
  { path: "nav-1", component: Nav1Component}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NavigationRoutingModule {
  static components = [NavigationContainer, Nav1Component]
 }