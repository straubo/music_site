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
import { SongManagerService } from "../song-manager.service";

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
  constructor(public songManagerService: SongManagerService) {}

  ngOnInit() {
    this.songs = [
      {
        name: "pillows",
        link: "pillowbeam_2.m4a",
      },
      {
        name: "someone elses home",
        link: "6_someone_elses_home.m4a",
      },
      {
        name: "cone 6",
        link: "5_transmission.m4a",
      },
      {
        name: "partytime",
        link: "party_time.m4a",
      },
      {
        name: "night wind",
        link: "winnie_2.wav",
      },
      {
        name: "podium",
        link: "candyland.wav",
      },
      {
        name: "history without mystery",
        link: "big_chirp.wav",
      },
      {
        name: "you wanted this before",
        link: "C_drone1.wav",
      },
    ];
    // "video1", "video2", "video3"
    this.videos = [];
    this.colors = [
      //dark blue
      "#192f7e",
      //lighter
      "#19627e",
      // faded forest green
      "#166134",
      // burnt creamsicle
      "#e79b3d",
      // faded red 2
      "#7a2323",
      // turquoise
      "#1a7c58",
      // piggy pink
      "#d46e69",
      //orange
      "#bc4618",
      //yellow
      "#fce336",
    ];
    this.selectedSong = this.songs[2];
  }

  songs: Song[];
  videos = [];
  colors: String[];
  selectedSong: Song;

  setAudioSrc(clickedSong) {
    this.songManagerService.newSongSelection(clickedSong);
  }
}
