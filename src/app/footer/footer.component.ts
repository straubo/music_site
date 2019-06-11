import { Component, OnInit } from "@angular/core";
import { FooterUpService } from "../footer-up.service";
import { Router } from "@angular/router";
import { SongManagerService } from "../song-manager.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  footerUp: boolean;
  audio = new Audio();
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
      this.startNewAudio(song);
    });
  }
  // audio player stuff:

  startNewAudio(newSongObj) {
    this.audio.src = "../../assets/" + newSongObj.link;
    this.audio.load();
    if (this.initialized) {
      this.audio.play();
    } else {
      this.initialized = true;
    }
  }

  playAudio() {
    this.audio.play();
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
    this.footerUp = !this.footerUp;
  }
}
