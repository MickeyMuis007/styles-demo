import { Injectable } from "@angular/core";
import { Observable, of, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NavbarStateService { 
  displayOberver: BehaviorSubject<boolean>; 
  
  constructor() {
    this.displayOberver = new BehaviorSubject<boolean>(false);
  }

  setDisplay(display: boolean) {
    this.displayOberver.next(display);
  }

  getDisplay(): Observable<boolean> {
    return this.displayOberver;
  }
}