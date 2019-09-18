import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './card.component';
import { Card1Component } from "./card1/card1.component"; 
import { Card2Component } from "./card2/card2.component";

const routes: Routes = [
  { path: "", component: CardComponent },
  { path: "card1", component: Card1Component },
  { path: "card2", component: Card2Component } 
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
    Card1Component, CardComponent, Card2Component
  ];
}
