import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FooterUpService {
  constructor() {}
  footerUp: boolean = false;
  toggleFooter() {
    this.footerUp = !this.footerUp;
  }
}
