import { Component, OnInit } from '@angular/core';
import { FeatureCard } from './model/feature-card.model';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  featureCards: FeatureCard[];  

  constructor() { }

  ngOnInit() {
    this.featureCards = [
      { name: "Cards", description: "This is a demo that's shows different card styles I encounter along my study path.", imgUrl: "assets/img/data.png" },
      { name: "Cards", description: "This is a demo that's shows different card styles I encounter along my study path.", imgUrl: "assets/img/data.png" },
      { name: "Cards", description: "This is a demo that's shows different card styles I encounter along my study path.", imgUrl: "assets/img/data.png" },
      { name: "Cards", description: "This is a demo that's shows different card styles I encounter along my study path.", imgUrl: "assets/img/data.png" },
      { name: "Cards", description: "This is a demo that's shows different card styles I encounter along my study path.", imgUrl: "assets/img/data.png" },
      { name: "Cards", description: "This is a demo that's shows different card styles I encounter along my study path.", imgUrl: "assets/img/data.png" },
      { name: "Cards", description: "This is a demo that's shows different card styles I encounter along my study path.", imgUrl: "assets/img/data.png" },
      { name: "Cards", description: "This is a demo that's shows different card styles I encounter along my study path.", imgUrl: "assets/img/data.png" },
    ]
  }

}
