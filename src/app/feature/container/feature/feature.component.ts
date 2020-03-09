import { Component, OnInit } from '@angular/core';
import { FeatureCard } from '../../model/feature-card.model';
import { FeatureMenu } from 'src/app/shared/model/feature-menu.model';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  featureCards: FeatureMenu[];  

  constructor() { }

  ngOnInit() {
    this.featureCards = [
      { uri: "card", name: "Cards", description: "This is a demo that's shows different card styles I encounter along my study path.", imgUrl: "assets/img/data.png" },
      { uri: "background", name: "Background", description: "This is a demo that's shows different card styles I encounter along my study path.", imgUrl: "assets/img/data.png" },
      { uri: "button", name: "Buttons", description: "This is a demo that's shows different card styles I encounter along my study path.", imgUrl: "assets/img/data.png" },
      { uri: "heading", name: "Headings", description: "This is a demo that's shows different card styles I encounter along my study path.", imgUrl: "assets/img/data.png" },
      { uri: "slider", name: "Sliders", description: "This is a demo that's shows different card styles I encounter along my study path.", imgUrl: "assets/img/data.png" },
      { uri: "navigation", name: "Navigations", description: "This is a demo that's shows different card styles I encounter along my study path.", imgUrl: "assets/img/data.png" },
      { uri: "animation", name: "Animations", description: "This is a demo that's shows different card styles I encounter along my study path.", imgUrl: "assets/img/data.png" },
      { uri: "loaders", name: "Loaders", description: "This is a demo that's shows different card styles I encounter along my study path.", imgUrl: "assets/img/data.png" },
      { uri: "login", name: "Login", description: "This is different forms for login in", imgUrl: "assets/img/undraw/publish_article_icso.png" }
    ]
  }

}
