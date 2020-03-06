import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationBarComponent } from "./component/navigation-bar/navigation-bar.component";


const routes: Routes = [ 
  { path: '', pathMatch: 'full', redirectTo: '/feature' },
  { path: 'feature', loadChildren: () => import('./feature/feature.module').then((m) => m.FeatureModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  static components = [NavigationBarComponent];
}
