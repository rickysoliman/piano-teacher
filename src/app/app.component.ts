import { Component, Input } from '@angular/core';
import { Note, Measure, Song } from './types';

// temporary dummy data
const song = {
  title: 'Dummy Data Song',
  composer: 'Ricky Marasigan',
  bpm: 120,
  timeSignature: 4,
  trebleClef: true,
  measures: new Array(8).fill({
      timeSignature: 4,
      notes: [],
    }),
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  song = song;
}
