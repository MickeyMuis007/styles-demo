import { Component, OnInit, OnDestroy } from "@angular/core";
import { NavbarStateService } from 'src/app/shared/services/navbar-state-service';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-navigation-bar",
  templateUrl: "./navigation-bar.component.html",
  styleUrls: ["./navigation-bar.component.scss"]
})
export class NavigationBarComponent implements OnInit, OnDestroy { 
  displaySubscription: Subscription;
  displayNav: boolean;

  constructor(private navbarService: NavbarStateService) { }

  ngOnInit() {
    this.navbarService.setDisplay(true);
    
    this.displaySubscription = this.navbarService.getDisplay().subscribe((display) => {
      console.log("Display", display);
      this.displayNav = display;
    });

  }

  ngOnDestroy() {
    this.displaySubscription.unsubscribe();
  }
}