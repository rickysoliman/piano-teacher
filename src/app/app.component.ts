import { Component } from '@angular/core';
import { maryHadALittleLamb, cMajorScale, greensleeves, twinkleTwinkleLittleStar, wholeNotecMajorScale } from './song-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  song = wholeNotecMajorScale;
}
