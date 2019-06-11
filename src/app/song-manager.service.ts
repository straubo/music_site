import { Injectable } from "@angular/core";
import { Song } from "./music/song";
import { Observable, of } from "rxjs";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SongManagerService {
  constructor() {}
  songSource = new BehaviorSubject<Song>({
    name: "80's Car",
    link: "space_ad_petes.wav",
  });

  currentSong = this.songSource.asObservable();
  newSongSelection(song: Song) {
    this.songSource.next(song);
  }
}
