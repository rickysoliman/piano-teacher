import { Component, Input } from '@angular/core';
import { Note, Measure, Song } from './types';

const numOfMeasures = 4;

const trebleClef = false;

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
    timeSignature: song.timeSignature,
    trebleClef,
    measureNumber: i + 1,
    notes: [
      {
        duration: 1,
        name: 'A',
        octave: 3,
        beat: 1,
      },
      {
        duration: 1,
        name: 'F',
        octave: 3,
        beat: 2,
      },
      {
        duration: 1,
        name: 'D',
        octave: 3,
        beat: 3,
      },
      {
        duration: 1,
        name: 'G',
        octave: 2,
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
