import { Song } from "./types";

export const song: Song = {
  title: 'Mary Had a Little Lamb',
  composer: 'Traditional',
  bpm: 120,
  timeSignature: 4,
  trebleClef: true,
  measures: [
    {
      timeSignature: 4,
      trebleClef: true,
      measureNumber: 1,
      notes: [
        {
          duration: 1,
          name: 'E',
          octave: 4,
          beat: 1,
        },
        {
          duration: 1,
          name: 'D',
          octave: 4,
          beat: 2,
        },
        {
          duration: 1,
          name: 'C',
          octave: 4,
          beat: 3,
        },
        {
          duration: 1,
          name: 'D',
          octave: 4,
          beat: 4,
        },
      ],
    },
    {
      timeSignature: 4,
      trebleClef: true,
      measureNumber: 2,
      notes: [
        {
          duration: 1,
          name: 'E',
          octave: 4,
          beat: 1,
        },
        {
          duration: 1,
          name: 'E',
          octave: 4,
          beat: 2,
        },
        {
          duration: 2,
          name: 'E',
          octave: 4,
          beat: 3,
        },
      ],
    },
    {
      timeSignature: 4,
      trebleClef: true,
      measureNumber: 3,
      notes: [
        {
          duration: 1,
          name: 'D',
          octave: 4,
          beat: 1,
        },
        {
          duration: 1,
          name: 'D',
          octave: 4,
          beat: 2,
        },
        {
          duration: 2,
          name: 'D',
          octave: 4,
          beat: 3,
        },
      ],
    },
    {
      timeSignature: 4,
      trebleClef: true,
      measureNumber: 4,
      notes: [
        {
          duration: 1,
          name: 'E',
          octave: 4,
          beat: 1,
        },
        {
          duration: 1,
          name: 'G',
          octave: 4,
          beat: 2,
        },
        {
          duration: 2,
          name: 'G',
          octave: 4,
          beat: 3,
        },
      ],
    },
  ],
};
