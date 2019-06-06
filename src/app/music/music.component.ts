import { Component, OnInit } from "@angular/core";
import { Song } from "./song";
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
  selector: "app-music",
  templateUrl: "./music.component.html",
  styleUrls: ["./music.component.css"],
  animations: [
    trigger("songRectangleIn", [
      transition("* => *", [
        query(
          ".songContainer",
          style({
            opacity: 0,
            // left: "-100vh",
            transform: "translateX(-100vw)",
          }),
          { optional: true }
        ),
        query(".songContainer", [
          stagger("100ms", [
            animate(
              "500ms ease-out",
              style({
                opacity: 1,
                // left: 0
                transform: "translateX(0)",
              })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class MusicComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.songs = [
      {
        name: "Melancholy",
      },
      {
        name: "Pillows",
      },
      {
        name: "80's Car",
      },
      {
        name: "amen_1",
      },
      {
        name: "Angular",
      },
      {
        name: "spooky",
      },
      {
        name: "bad dream",
      },
      {
        name: "another",
      },
    ];
    this.videos = ["video1", "video2", "video3"];
    this.colors = [
      //dark blue
      "#192f7e",
      //lighter
      "#19627e",
      // faded red 2
      "#7a2323",
      //yellow
      // "#fce336",
      // burnt creamsicle
      "#e79b3d",
      // turquoise
      "#1a7c58",
      // faded red
      "#bc342d",
      //orange
      "#bc4618",
      // faded forest green
      "#166134",
    ];
  }

  songs: Song[];
  videos = [];
  colors: String[];
}
