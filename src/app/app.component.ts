import { Component, Input } from '@angular/core';
import { Note, Measure, Song } from './types';

const numOfMeasures = 2;

const trebleClef = true;

// temporary dummy data
const song = {
  title: 'Dummy Data Song',
  composer: 'Ricky Marasigan',
  bpm: 120,
  timeSignature: 4,
  trebleClef,
  measures: [] as Measure[],
};

for (let i = 0; i < numOfMeasures; i++) {
  const measure = {
    timeSignature: 4,
    trebleClef,
    measureNumber: i + 1,
    notes: [
      {
        duration: 1,
        name: 'C',
        octave: 5,
        beat: 1,
      },
      {
        duration: 1,
        name: 'B',
        octave: 4,
        beat: 2,
      },
      {
        duration: 1,
        name: 'C',
        octave: 5,
        beat: 3,
      },
      {
        duration: 1,
        name: 'G',
        octave: 4,
        beat: 4,
      },
    ] as Note[],
  };
  song.measures[i] = measure;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  song = song;
}
