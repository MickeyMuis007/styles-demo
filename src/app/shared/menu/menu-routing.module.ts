import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { FeatureComponent } from "./component/feature/feature.component";

const routes: Routes = [
  { path: "feature", component: FeatureComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MenuRoutingModule {
  static components = [ FeatureComponent ];
}