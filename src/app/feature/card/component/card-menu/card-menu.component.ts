import { Component, OnInit } from "@angular/core";

import { ICardMenuItem } from "../../model/card-menu-item.model";

@Component({
  selector: "card-card-menu",
  templateUrl: "./card-menu.component.html",
  styleUrls: ["./card-menu.component.scss"]
})
export class CardMenuComponent implements OnInit {
  cardMenuItems: ICardMenuItem[];

  ngOnInit() {
    this.cardMenuItems = [
      { id: "1", name: "Card 1", description: `This is a decription on card 1,
      This is a decription on card 1`, uri: "card1" },
      { id: "2", name: "Card 2", description: "This is a description on card 2", uri: "card2" },
      { id: "3", name: "Card 3", description: "This is a description on card 3", uri: "card3" },
    ]
  }
}