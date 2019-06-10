import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FooterUpService {
  constructor() {
    // this.generated = false;
  }
  // generated: boolean;
  footerUp: boolean = false;
  toggleFooter() {
    this.footerUp = !this.footerUp;
    console.log("holy shet");
  }
}
