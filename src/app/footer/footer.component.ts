import { Component, OnInit } from "@angular/core";
import { FooterUpService } from "../footer-up.service";
import { Router } from "@angular/router";
import { Song } from "../music/song";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  footerUp: boolean;
  audio = new Audio();

  constructor(
    private footerUpService: FooterUpService,
    private router: Router
  ) {
    // this.footerUp = footerUpService.footerUp;

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
  ngOnInit() {
    this.footerUp = false;
    this.selectedSong = {
      name: "80's Car",
      link: "../../assets/space_ad_petes.wav",
    };
  }
  selectedSong: Song;

  pickANewSong(newSong) {
    // this.selectedSong = newSong;
    this.startNewAudio(newSong.link);
  }

  currentlyOnHome: boolean;
  timeToToggle() {
    // this.footerUpService.toggleFooter();
    this.footerUp = !this.footerUp;
  }

  // audio player stuff:

  startNewAudio(a?) {
    // this.audio = new Audio();
    this.audio.src = "../../assets/" + (a ? a : "space_ad_petes.wav");
    this.audio.load();
    this.audio.play();
  }

  playAudio(a?) {
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

  // triggerFooterUp() {
  //   this.footerUp = !this.footerUp;
  //   console.log(this.footerUp);
  // }
}
