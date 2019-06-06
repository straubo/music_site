import { Component } from "@angular/core";
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
} from "@angular/animations";

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
  ],
})
export class AppComponent {
  constructor(private router: Router) {
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
  }
  currentlyOnHome: boolean;
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
    // console.log(outlet);
  }
}
