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
  selectedSong: Song;

  constructor(
    private footerUpService: FooterUpService,
    private router: Router,
    public songManagerService: SongManagerService
  ) {
    // this.footerUp = footerUpService.footerUp;

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

    this.songManagerService.currentSong.subscribe(song => {
      this.selectedSong = song;
      console.log(this.selectedSong);
    });

    // this.selectedSong = {
    //   name: "80's Car",
    //   link: "../../assets/space_ad_petes.wav",
    // };

    // this.subscribeToThing();

    // this.songManagerService
    //   .newSongSelection(this.selectedSong)
    //   .subscribe(songObj => {
    //     this.audio.src = "../../assets/" + songObj.link;
    //     this.startNewAudio();
    //   });

    // {
    // console.log(songObj);
    // this.audio.src = "../../assets/" + songObj.link;
    // this.startNewAudio();
    // }

    // this.songManagerService.transmitSong().subscribe(songObj => {
    //   this.selectedSong = songObj;
    //   console.log(this.selectedSong);
    // });

    // this.musicComponent.transmitSong().subscribe(songObj => {
    //   this.selectedSong = songObj;
    //   console.log(this.selectedSong);
    // });
  }
  // subscribeToThing() {
  //   this.songManagerService.sendSignal().subscribe(
  //     //   stringComingIn => {
  //     //   console.log(stringComingIn);
  //     // }
  //     function(x) {
  //       this.pickANewSong(x);
  //     },
  //     function(err) {
  //       console.log("error: " + err);
  //     },
  //     function() {
  //       console.log("done!");
  //     }
  //   );
  // }

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
    // this.songManagerService.newSongSelection(a).subscribe(songObj => {
    //   this.audio.src = "../../assets/" + songObj.link;
    // });

    console.log(this.audio.src);
    // this.audio.src = "../../assets/" + (a ? a : "space_ad_petes.wav");
    // this.audio.load();
    // this.audio.play();
  }

  playAudio(a?) {
    // console.log("playing!");
    // if (this.audio && this.audio.hasOwnProperty("src")) {

    // this.audio.play();

    this.songManagerService.sendSignal();

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
}
