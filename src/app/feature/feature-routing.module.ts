import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

// Components
import { FeatureComponent } from "./feature.component";
import { FeatureCardComponent } from "./component/feature-card/feature-card.component";

const routes: Routes = [
  { path: "", component: FeatureComponent },
  { path: "card", loadChildren: () => import("./card/card.module").then(m => m.CardModule) },
  { path: "background", loadChildren: () =>  import("./background/background.module"). then(m => m.BackgroundModule)}
]

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ], 
  exports: [ RouterModule ]
})
export class FeatureRoutingModule {
  static components = [ FeatureComponent, FeatureCardComponent ];
 }
