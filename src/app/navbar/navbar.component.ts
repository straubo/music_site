import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
} from "@angular/animations";
import { MobileNavService } from "../mobile-nav.service";
// import { url } from "inspector";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
  animations: [
    trigger("routerIn", [
      state(
        "out",
        style({
          marginTop: "-15vh",
          opacity: "0",
        })
      ),
      state(
        "in",
        style({
          marginTop: "0",
          opacity: "1",
        })
      ),
      transition("out => in", [animate(".7s 300ms ease-in-out")]),
      transition("in => out", [animate(".7s 300ms ease-in-out")]),
    ]),
    trigger("topMenuBar", [
      state(
        "inactive",
        style({
          top: "-5px",
          transform: "rotateZ(90deg)",
          left: "14px",
        })
      ),
      state(
        "active",
        style({
          top: "0px",
          transform: "rotateZ(45deg)",
          left: "13px",
        })
      ),
      transition("inactive <=> active", [animate("300ms")]),
    ]),
    trigger("middleMenuBar", [
      state(
        "inactive",
        style({
          opacity: 1,
        })
      ),
      state(
        "active",
        style({
          opacity: 0,
        })
      ),
      transition("inactive <=> active", [animate("50ms")]),
    ]),
    trigger("bottomMenuBar", [
      state(
        "inactive",
        style({
          top: "5px",
          transform: "rotateZ(90deg)",
          left: "14px",
        })
      ),
      state(
        "active",
        style({
          top: "2px",
          transform: "rotateZ(135deg)",
          left: "13px",
        })
      ),
      transition("inactive <=> active", [animate("300ms")]),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  currentlyOnHome: boolean;
  mobileNavOpen: boolean;
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
      this.mobileNavOpen = bool;
    });
  }

  ngOnInit() {
    // this.mobileNavOpen = false;
  }
  // this.mobileNavOpen = !this.mobileNavOpen;
  //   console.log(this.mobileNavOpen);
  mobileNavClick() {
    this.mobileNavService.mobileNavClick();
  }
}
