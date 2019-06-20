import { Component, OnInit } from "@angular/core";
import { MobileNavService } from "../mobile-nav.service";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
} from "@angular/animations";

@Component({
  selector: "app-mobile-nav",
  templateUrl: "./mobile-nav.component.html",
  styleUrls: ["./mobile-nav.component.css"],
  animations: [
    trigger("menuItemContainer", [
      transition(":enter", [
        query(".mobileRouterLinkContainer", [
          style({
            marginTop: "-40px",
            opacity: 0,
          }),
        ]),
        query(".mobileRouterLinkContainer", [
          stagger("200ms", [
            animate(
              "500ms ease-out",
              style({
                marginTop: "0",
                opacity: 1,
              })
            ),
          ]),
        ]),
      ]),
      transition(":leave", [
        query(".mobileRouterLinkContainer", [
          style({
            opacity: 1,
          }),
        ]),
        query(".mobileRouterLinkContainer", [
          animate(
            "400ms ease-out",
            style({
              opacity: 0,
            })
          ),
        ]),
      ]),
    ]),
  ],
})
export class MobileNavComponent implements OnInit {
  mobileNavOpen: boolean;
  constructor(public mobileNavService: MobileNavService) {
    this.mobileNavService.mobileNavActive.subscribe(bool => {
      this.mobileNavOpen = bool;
    });
  }

  ngOnInit() {}
  mobileLinkClick() {
    this.mobileNavService.mobileNavClick(false);
  }
}
