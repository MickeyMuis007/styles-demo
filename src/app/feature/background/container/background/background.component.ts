import { Component } from "@angular/core";
import { FeatureMenu } from 'src/app/shared/model/feature-menu.model';

@Component({
  selector: "background-root",
  templateUrl: "./background.component.html",
  styleUrls: ["./background.component.scss"]
})
export class BackgroundComponent { 
  backgroundMenus: FeatureMenu[];

  ngOnInit() {
    this.backgroundMenus = [
      { uri: "background1", name: "Background 1", description: "1st background", imgUrl: "assets/img/undraw/publish_article_icso.png"}
    ]
  }
}
