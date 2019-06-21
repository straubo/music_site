import { Component, OnInit, ComponentRef } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";

@Component({
  selector: "app-raindrop",
  templateUrl: "./raindrop.component.html",
  styleUrls: ["./raindrop.component.css"],
  animations: [
    trigger("rainLineIn", [
      state("*", style({ "stroke-dashoffset": 0 })),
      transition("void => *", [
        style({
          "stroke-dasharray": 1352.439268137,
          "stroke-dashoffset": 1352.439268137,
        }),
        animate("2.5s ease-in-out", style({ "stroke-dashoffset": 0 })),
      ]),
    ]),

    trigger("rainDrip1In", [
      state("*", style({ "stroke-dashoffset": 0 })),
      transition("void => *", [
        style({
          "stroke-dasharray": 50.748687744140625,
          "stroke-dashoffset": 50.748687744140625,
        }),
        animate("0.4s 1.9s ease", style({ "stroke-dashoffset": 0 })),
      ]),
    ]),
    trigger("rainDrip2In", [
      state("*", style({ "stroke-dashoffset": 0 })),
      transition("void => *", [
        style({
          "stroke-dasharray": 55.05485534667969,
          "stroke-dashoffset": 55.05485534667969,
        }),
        animate("0.4s 1.9s ease", style({ "stroke-dashoffset": 0 })),
      ]),
    ]),
    trigger("leaveNow", [
      state("gone", style({ opacity: "0" })),
      state("notGone", style({ opacity: "1" })),
      transition("notGone => gone", [
        style({
          opacity: "1",
        }),
        animate(500, style({ opacity: "0" })),
      ]),
    ]),
  ],
})
export class RaindropComponent implements OnInit {
  cmpRef: ComponentRef<Component>;
  constructor() {}
  animateDrips = false;
  completedFull = false;
  _ref: any;

  completeAnimation() {
    this.completedFull = true;
  }
  coordinates;
  generateCoordinates() {
    this.coordinates = [
      Math.random() * window.innerWidth - 465 + "px",
      (3 * (Math.random() * window.innerHeight)) / 4 - 650 + "px",
    ];
  }

  ngOnInit() {
    this.generateCoordinates();
    this.colorNumbers = [
      "#d2801a",
      "#67c0ff",
      "#228a0f",
      "#8a54d2",
      "#efd91d",
      "#a23737",
      "#71bdd4",
      "#b17599",
      "#7590b1",
    ];
    this.selectedColor = this.colorNumbers[
      Math.floor(Math.random() * this.colorNumbers.length)
    ];
  }
  colorNumbers: String[];
  selectedColor;
}
