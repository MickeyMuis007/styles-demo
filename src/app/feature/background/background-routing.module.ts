import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { BackgroundComponent } from "./background.component";
import { Background1Component } from "./background1/background1.component";
import { BackgroundMenuComponent } from "./component/background-menu/background-menu.component";

const routes: Routes = [
  { path: "", component: BackgroundComponent },
  { path: "background1", component: Background1Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BackgroundRoutingModule {
  static components = [ BackgroundComponent, BackgroundMenuComponent, Background1Component ]
}