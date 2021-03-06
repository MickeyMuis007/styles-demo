import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

// Components
import { FeatureComponent } from "./container/feature/feature.component";
import { FeatureCardComponent } from "./component/feature-card/feature-card.component";

const routes: Routes = [
  { path: "", component: FeatureComponent },
  { path: "card", loadChildren: () => import("./card/card.module").then(m => m.CardModule) },
  { path: "background", loadChildren: () =>  import("./background/background.module").then(m => m.BackgroundModule)},
  { path: "slider", loadChildren: () => import("./slider/slider.modules").then(m => m.SliderModule)},
  { path: "button", loadChildren: () => import("./button/button.module").then(m => m.ButtonModule)},
  { path: "navigation", loadChildren: () => import("./navigation/navigation.module").then(m => m.NavigationModule)},
  { path: "login", loadChildren: () => import("./login/login.module").then(m => m.LoginModule)}
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
