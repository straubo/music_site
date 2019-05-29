import { Component, OnInit } from "@angular/core";
import { Song } from "./song";

@Component({
  selector: "app-music",
  templateUrl: "./music.component.html",
  styleUrls: ["./music.component.css"],
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
    ];
    this.videos = ["video1", "video2", "video3"];
  }
  songs: Song[];
  videos = [];
}
