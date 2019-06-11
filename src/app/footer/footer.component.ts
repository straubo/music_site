import { Component, OnInit } from "@angular/core";
import { FooterUpService } from "../footer-up.service";
import { Router } from "@angular/router";
import { Song } from "../music/song";
import { SongManagerService } from "../song-manager.service";
// import { Observable, of } from "rxjs";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  footerUp: boolean;
  audio = new Audio();
  // selectedSong: Song;
  currentlyOnHome: boolean;
  initialized: boolean;

  constructor(
    private footerUpService: FooterUpService,
    private router: Router,
    public songManagerService: SongManagerService
  ) {
    this.currentlyOnHome = true;
  }

  ngOnInit() {
    this.footerUp = false;
    this.router.events.subscribe(val => {
      if (val.hasOwnProperty("url")) {
        if (val["url"] === "/home" || val["url"] === "/") {
          this.currentlyOnHome = true;
        } else {
          this.currentlyOnHome = false;
        }
      }
    });
    this.initialized = false;

    this.songManagerService.currentSong.subscribe(song => {
      // this.selectedSong = song;
      // console.log(this.selectedSong);
      this.startNewAudio(song);
    });
  }
  // audio player stuff:

  startNewAudio(newSongObj) {
    this.audio.src = "../../assets/" + newSongObj.link;
    // console.log(this.audio.src);
    this.audio.load();
    if (this.initialized) {
      this.audio.play();
    } else {
      this.initialized = true;
    }

    // this.audio.src = "../../assets/" + (a ? a : "space_ad_petes.wav");
  }

  playAudio() {
    // console.log("playing!");
    // if (this.audio && this.audio.hasOwnProperty("src")) {
    this.audio.play();
    // } else {
    //   this.startNewAudio();
    // }
  }

  pauseAudio() {
    this.audio.pause();
  }

  turnUpAudio() {
    if (this.audio.volume < 1) {
      this.audio.volume += 0.1;
    }
  }
  turnDownAudio() {
    if (this.audio.volume > 0) {
      this.audio.volume -= 0.1;
    }
  }
  // ---------------------------------

  timeToToggle() {
    // this.footerUpService.toggleFooter();
    this.footerUp = !this.footerUp;
  }
}
