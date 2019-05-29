import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-music",
  templateUrl: "./music.component.html",
  styleUrls: ["./music.component.css"],
})
export class MusicComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.songs = ["song1", "song2", "song3", "song4"];
    this.videos = ["video1", "video2", "video3"];
  }
  songs = [];
  videos = [];
}
