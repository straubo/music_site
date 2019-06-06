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
import { url } from "inspector";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
  animations: [
    trigger("routerIn", [
      state(
        "out",
        style({
          // height: "0vh",
          marginTop: "-15vh",
          opacity: "0",
        })
      ),
      state(
        "in",
        style({
          // height: "15vh",
          marginTop: "0",
          opacity: "1",
        })
      ),
      transition("out => in", [animate(".7s 300ms ease-in-out")]),
      transition("in => out", [animate(".7s 300ms ease-in-out")]),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
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

  ngOnInit() {}
}
