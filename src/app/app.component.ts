import { Component } from '@angular/core';
import { grandStaffSong, twinkleTwinkleLittleStar, newBlankSong } from './song-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  song = newBlankSong;
}
