import { Component, OnInit, OnDestroy, HostListener, Renderer2, ViewChild, ElementRef } from "@angular/core";
import { NavbarStateService } from 'src/app/shared/services/navbar-state-service';

@Component({
  selector: "navigation-nav-1",
  templateUrl: "./nav-1.component.html",
  styleUrls: ["./nav-1.component.scss"]
})
export class Nav1Component implements OnInit, OnDestroy {
  @ViewChild("header", { static: false}) headerContainer: ElementRef;
  currentPosition: number;

  constructor(private navbarService: NavbarStateService, private renderer: Renderer2) { }

  ngOnInit() {
    this.currentPosition = 0;
    this.navbarService.setDisplay(false);
  }

  ngOnDestroy() {
    this.navbarService.setDisplay(true);
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    const verticalOffset = window.pageYOffset 
          || document.documentElement.scrollTop 
          || document.body.scrollTop || 0;

    const headerElement = this.headerContainer.nativeElement as Element;
    
  if(this.currentPosition < verticalOffset) {
      headerElement.classList.add("scroll-up");
    } else {
      headerElement.classList.remove("scroll-up");
    }
    this.currentPosition = verticalOffset;
  }
 }