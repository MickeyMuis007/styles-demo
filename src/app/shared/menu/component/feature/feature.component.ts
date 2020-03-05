import { Component, Input } from "@angular/core";
import { FeatureMenu } from 'src/app/shared/model/feature-menu.model';

@Component({
  selector: "menu-feature",
  templateUrl: "./feature.component.html",
  styleUrls: ["./feature.component.scss"]
})
export class FeatureComponent { 
  @Input() featureMenuItem: FeatureMenu;
}