import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './container/card/card.component';
import { Card1Component } from "./component/card1/card1.component"; 
import { Card2Component } from "./component/card2/card2.component";
import { Card3Component } from "./component/card3/card3.component";
import { Card4Component } from "./component/card4/card4.component";
import { CardMenuComponent } from './component/card-menu/card-menu.component';
import { CardMenuItemComponent } from './component/card-menu/card-menu-item/card-menu-item.component';

const routes: Routes = [
  { path: "", component: CardComponent },
  { path: "card-menu", component: CardMenuComponent },
  { path: "card1", component: Card1Component },
  { path: "card2", component: Card2Component },
  { path: "card3", component: Card3Component },
  { path: "card4", component: Card4Component }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CardRoutingModule { 
  static components = [ 
    Card1Component, CardComponent, Card2Component, Card3Component, Card4Component,
    CardMenuComponent, CardMenuItemComponent,
  ];
}
