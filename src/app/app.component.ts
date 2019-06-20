import { Component, OnInit } from "@angular/core";
import { RouterOutlet, Router } from "@angular/router";
import { slideInAnimation } from "./animations";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  animateChild,
} from "@angular/animations";
import { MobileNavService } from "./mobile-nav.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    slideInAnimation,
    trigger("shorterBody", [
      state(
        "shorter",
        style({
          height: "calc(85vh - 40px)",
        })
      ),
      state(
        "longer",
        style({
          height: "100vh",
        })
      ),
      transition("shorter <=> longer", [animate(".7s 300ms ease-in-out")]),
    ]),
    // trigger("mobileNavIn", [
    //   state(
    //     "in",
    //     style({
    //       opacity: 1,
    //     })
    //   ),
    //   state(
    //     "out",
    //     style({
    //       opacity: 0,
    //     })
    //   ),
    //   transition("in <=> out", [
    //     animate("300ms ease-in-out"),
    //     query("@mobileNavIn", animateChild()),
    //   ]),
    // ]),
  ],
})
export class AppComponent implements OnInit {
  currentlyOnHome: boolean;
  mobileNavDisplay: boolean;
  constructor(
    private router: Router,
    public mobileNavService: MobileNavService
  ) {
    this.currentlyOnHome = true;
    router.events.subscribe(val => {
      if (val.hasOwnProperty("url")) {
        if (val["url"] === "/home" || val["url"] === "/") {
          this.currentlyOnHome = true;
        } else {
          this.currentlyOnHome = false;
        }
      }
    });
    this.mobileNavService.mobileNavActive.subscribe(bool => {
      this.mobileNavDisplay = bool;
    });
  }
  ngOnInit() {}

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
