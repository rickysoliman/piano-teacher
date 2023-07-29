import { Song } from "./types";

export const grandStaffSong: Song = {
  title: 'Grand Staff',
  composer: 'Me',
  bpm: 100,
  timeSignature: { top: 4, bottom: 4 },
  grandStaff: true,
  rightHandTreble: true,
  leftHandTreble: false,
  rightHandMeasures: [
    {
      trebleClef: true,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 1,
      notes: [
        {
          name: 'E',
          octave: 4,
          duration: 4,
          beat: 1,
        },
      ],
    },
    {
      trebleClef: true,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 2,
      notes: [
        {
          name: 'C',
          octave: 4,
          duration: 4,
          beat: 1,
        },
      ],
    },
    {
      trebleClef: true,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 3,
      notes: [
        {
          name: 'E',
          octave: 4,
          duration: 4,
          beat: 1,
        },
      ],
    },
    {
      trebleClef: true,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 4,
      notes: [
        {
          name: 'C',
          octave: 4,
          duration: 4,
          beat: 1,
        },
      ],
    },
  ],
  leftHandMeasures: [
    {
      trebleClef: false,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 1,
      notes: [
        {
          name: 'C',
          octave: 3,
          duration: 4,
          beat: 1,
        },
      ],
    },
    {
      trebleClef: false,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 2,
      notes: [
        {
          name: 'E',
          octave: 3,
          duration: 4,
          beat: 1,
        },
      ],
    },
    {
      trebleClef: false,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 3,
      notes: [
        {
          name: 'C',
          octave: 3,
          duration: 4,
          beat: 1,
        },
      ],
    },
    {
      trebleClef: false,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 4,
      notes: [
        {
          name: 'E',
          octave: 3,
          duration: 4,
          beat: 1,
        },
      ],
    },
  ],
};
