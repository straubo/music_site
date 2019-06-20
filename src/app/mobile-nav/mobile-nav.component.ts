import { Component, OnInit } from "@angular/core";
import { MobileNavService } from "../mobile-nav.service";

@Component({
  selector: "app-mobile-nav",
  templateUrl: "./mobile-nav.component.html",
  styleUrls: ["./mobile-nav.component.css"],
})
export class MobileNavComponent implements OnInit {
  constructor(public mobileNavService: MobileNavService) {}

  ngOnInit() {}
  mobileLinkClick() {
    this.mobileNavService.mobileNavClick(false);
  }
}
