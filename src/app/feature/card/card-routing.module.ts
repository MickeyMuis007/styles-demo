import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Card1Component } from "./card1/card1.component"; 
import { CardComponent } from './card.component';

const routes: Routes = [
  { path: "", component: CardComponent },
  { path: "card1", component: Card1Component } 
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
    Card1Component, CardComponent
  ];
}
