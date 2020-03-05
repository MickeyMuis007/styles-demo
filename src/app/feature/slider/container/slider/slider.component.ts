import { Component } from "@angular/core";
import { FeatureMenu } from 'src/app/shared/model/feature-menu.model';

@Component({
  selector: "slider-root",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"]
})
export class SliderComponent {
  sliderMenus: FeatureMenu[];

  constructor() { }

  ngOnInit() {
    this.sliderMenus = [
      { uri: "slider1", name: "Slider 1", description: "The 1st navigation design", imgUrl: "assets/img/undraw/publish_article_icso.png" }
    ]
  }
}
