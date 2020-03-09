import { Component } from "@angular/core";
import { FeatureMenu } from 'src/app/shared/model/feature-menu.model';

@Component({
  selector: "navigation-root",
  templateUrl: "./navigation.container.html",
  styleUrls: ["./navigation.container.scss"]
})
export class NavigationContainer {
  navigationMenus: FeatureMenu[];

  constructor() { }

  ngOnInit() {
    this.navigationMenus = [
      { uri: "nav-1", name: "Navigation 1", description: "The 1st navigation design", imgUrl: "assets/img/undraw/publish_article_icso.png" },
      { uri: "nav-1", name: "Navigation 1", description: "The 1st navigation design", imgUrl: "assets/img/undraw/publish_article_icso.png" }
    ]
  }
}