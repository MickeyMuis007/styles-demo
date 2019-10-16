import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { ButtonComponent } from "./container/button/button.component";

const routes: Routes = [
  { path: "", component: ButtonComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ButtonRoutingModule {
  static component = [ ButtonComponent ]
}
