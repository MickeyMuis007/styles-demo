import { Component, Input } from '@angular/core';
import { ICardMenuItem } from '../../../model/card-menu-item.model';

@Component({
  selector: "card-card-menu-item",
  templateUrl: './card-menu-item.component.html',
  styleUrls: ['./card-menu-item.component.scss']
})
export class CardMenuItemComponent {
  @Input() cardMenuItem: ICardMenuItem;
}
