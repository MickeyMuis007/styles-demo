import { Component, Input } from "@angular/core";
import { FeatureCard } from '../../model/feature-card.model';

@Component({
    selector: "feature-feature-card",
    templateUrl: "./feature-card.component.html",
    styleUrls: ["./feature-card.component.scss"]
})
export class FeatureCardComponent {
    @Input() featureCard: FeatureCard;   
}