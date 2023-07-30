import { Component } from '@angular/core';
import { grandStaffSong, twinkleTwinkleLittleStar } from './song-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  song = twinkleTwinkleLittleStar;
}
