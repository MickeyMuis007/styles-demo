import { Component, OnInit } from '@angular/core';
import { faFeather } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  faFeather = faFeather;

  constructor() { }

  ngOnInit() {
  }

}
