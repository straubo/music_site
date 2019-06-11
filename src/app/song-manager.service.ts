import { Injectable } from "@angular/core";
import { Song } from "./music/song";
import { Observable, of } from "rxjs";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SongManagerService {
  constructor() {
    // this.selectedSong = {
    //   name: "80's Car",
    //   link: "../../assets/space_ad_petes.wav",
    // };
  }
  // selectedSong: Song;
  songSource = new BehaviorSubject<Song>({
    name: "80's Car",
    link: "space_ad_petes.wav",
  });

  currentSong = this.songSource.asObservable();

  // newSongSelection(song: Song): Observable<Song> {
  //   this.selectedSong = song;
  //   // console.log(this.selectedSong);
  //   return of(this.selectedSong);
  // }
  newSongSelection(song: Song) {
    // this.selectedSong = song;
    console.log("this is getting clicked");
    this.songSource.next(song);
    // this.transmitSong();
  }

  // transmitSong(): Observable<Song> {
  //   // console.log(this.selectedSong);
  //   return of(this.selectedSong);
  // }

  // sendSignal(): Observable<String> {
  //   return of("jesus this works");
  // }
}
