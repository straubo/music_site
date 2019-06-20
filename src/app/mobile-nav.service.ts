import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MobileNavService {
  // mobileNavActive: boolean = false;
  mobileNavActive = new BehaviorSubject<boolean>(false);
  currentlyActive: boolean = false;
  constructor() {}
  currentlyOpen = this.mobileNavActive.asObservable();

  mobileNavClick(a?) {
    if (a) {
      this.currentlyActive = false;
    } else {
      this.currentlyActive = !this.currentlyActive;
    }
    this.mobileNavActive.next(this.currentlyActive);
  }
}
