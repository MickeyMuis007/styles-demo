import { Component, OnInit } from "@angular/core";
import { FeatureMenu } from 'src/app/shared/model/feature-menu.model';

@Component({
  selector: "button-root",
  templateUrl: "./button.container.html",
  styleUrls: ["./button.container.scss"]
})
export class ButtonContainer implements OnInit {
  buttonMenus: FeatureMenu[];

  constructor() { }

  ngOnInit() {
    this.buttonMenus = [
      { uri: "search-button", name: "Search Button", description: "This is a search button text input", imgUrl: "assets/img/data.png"},
      { uri: "button-2", name: "Button 2", description: "Button 2 description", imgUrl: "assets/img/data.png"},
    ]
  }
}
