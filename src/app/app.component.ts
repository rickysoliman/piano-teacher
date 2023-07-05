import { Component, Input } from '@angular/core';
import { Note, Measure, Song } from './types';

const numOfMeasures = 8;

// temporary dummy data
const song = {
  title: 'Dummy Data Song',
  composer: 'Ricky Marasigan',
  bpm: 120,
  timeSignature: 4,
  trebleClef: true,
  measures: [] as Measure[],
};

for (let i = 1; i < numOfMeasures; i++) {
  song.measures[i] = {
    notes: [],
    timeSignature: 4,
    measureNumber: i,
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  song = song;
}
