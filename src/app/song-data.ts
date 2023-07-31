import { Song } from "./types";

export const newBlankSong: Song = {
  title: 'New Blank Song',
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
          name: 'rest',
          octave: null,
          duration: 4,
          beat: 1,
        }
      ],
    },
    {
      trebleClef: true,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 2,
      notes: [
        {
          name: 'rest',
          octave: null,
          duration: 4,
          beat: 1,
        }
      ],
    },
    {
      trebleClef: true,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 3,
      notes: [
        {
          name: 'rest',
          octave: null,
          duration: 4,
          beat: 1,
        }
      ],
    },
    {
      trebleClef: true,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 4,
      notes: [
        {
          name: 'rest',
          octave: null,
          duration: 4,
          beat: 1,
        }
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
          name: 'rest',
          octave: null,
          duration: 4,
          beat: 1,
        }
      ],
    },
    {
      trebleClef: false,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 2,
      notes: [
        {
          name: 'rest',
          octave: null,
          duration: 4,
          beat: 1,
        }
      ],
    },
    {
      trebleClef: false,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 3,
      notes: [
        {
          name: 'rest',
          octave: null,
          duration: 4,
          beat: 1,
        }
      ],
    },
    {
      trebleClef: false,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 4,
      notes: [
        {
          name: 'rest',
          octave: null,
          duration: 4,
          beat: 1,
        }
      ],
    },
  ],
};

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
    {
      trebleClef: true,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 5,
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
      measureNumber: 6,
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
      measureNumber: 7,
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
      measureNumber: 8,
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
    {
      trebleClef: false,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 5,
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
      measureNumber: 6,
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
      measureNumber: 7,
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
      measureNumber: 8,
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

export const twinkleTwinkleLittleStar: Song = {
  title: 'Twinkle Twinkle Little Star',
  composer: 'Traditional',
  bpm: 100,
  timeSignature: { top: 4, bottom: 4 },
  grandStaff: true,
  rightHandTreble: true,
  leftHandTreble: false,
  rightHandMeasures: [
    // Right Hand (Treble Clef) Measures
    {
      trebleClef: true,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 1,
      notes: [
        { name: 'C', octave: 4, duration: 1, beat: 1 },
        { name: 'C', octave: 4, duration: 1, beat: 2 },
        { name: 'G', octave: 4, duration: 1, beat: 3 },
        { name: 'G', octave: 4, duration: 1, beat: 4 },
      ],
    },
    {
      trebleClef: true,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 2,
      notes: [
        { name: 'A', octave: 4, duration: 1, beat: 1 },
        { name: 'A', octave: 4, duration: 1, beat: 2 },
        { name: 'G', octave: 4, duration: 2, beat: 3 },
      ],
    },
    {
      trebleClef: true,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 3,
      notes: [
        { name: 'F', octave: 4, duration: 1, beat: 1 },
        { name: 'F', octave: 4, duration: 1, beat: 2 },
        { name: 'E', octave: 4, duration: 1, beat: 3 },
        { name: 'E', octave: 4, duration: 1, beat: 4 },
      ],
    },
    {
      trebleClef: true,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 4,
      notes: [
        { name: 'D', octave: 4, duration: 1, beat: 1 },
        { name: 'D', octave: 4, duration: 1, beat: 2 },
        { name: 'C', octave: 4, duration: 2, beat: 3 },
      ],
    },
    {
      trebleClef: true,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 5,
      notes: [
        { name: 'G', octave: 4, duration: 1, beat: 1 },
        { name: 'G', octave: 4, duration: 1, beat: 2 },
        { name: 'F', octave: 4, duration: 1, beat: 3 },
        { name: 'F', octave: 4, duration: 1, beat: 4 },
      ],
    },
    {
      trebleClef: true,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 6,
      notes: [
        { name: 'E', octave: 4, duration: 1, beat: 1 },
        { name: 'E', octave: 4, duration: 1, beat: 2 },
        { name: 'D', octave: 4, duration: 2, beat: 3 },
      ],
    },
    {
      trebleClef: true,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 7,
      notes: [
        { name: 'G', octave: 4, duration: 1, beat: 1 },
        { name: 'G', octave: 4, duration: 1, beat: 2 },
        { name: 'F', octave: 4, duration: 1, beat: 3 },
        { name: 'F', octave: 4, duration: 1, beat: 4 },
      ],
    },
    {
      trebleClef: true,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 8,
      notes: [
        { name: 'E', octave: 4, duration: 1, beat: 1 },
        { name: 'E', octave: 4, duration: 1, beat: 2 },
        { name: 'D', octave: 4, duration: 2, beat: 3 },
      ],
    },
    {
      trebleClef: true,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 9,
      notes: [
        { name: 'C', octave: 4, duration: 1, beat: 1 },
        { name: 'C', octave: 4, duration: 1, beat: 2 },
        { name: 'G', octave: 4, duration: 1, beat: 3 },
        { name: 'G', octave: 4, duration: 1, beat: 4 },
      ],
    },
    {
      trebleClef: true,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 10,
      notes: [
        { name: 'A', octave: 4, duration: 1, beat: 1 },
        { name: 'A', octave: 4, duration: 1, beat: 2 },
        { name: 'G', octave: 4, duration: 2, beat: 3 },
      ],
    },
    {
      trebleClef: true,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 11,
      notes: [
        { name: 'F', octave: 4, duration: 1, beat: 1 },
        { name: 'F', octave: 4, duration: 1, beat: 2 },
        { name: 'E', octave: 4, duration: 1, beat: 3 },
        { name: 'E', octave: 4, duration: 1, beat: 4 },
      ],
    },
    {
      trebleClef: true,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 12,
      notes: [
        { name: 'D', octave: 4, duration: 1, beat: 1 },
        { name: 'D', octave: 4, duration: 1, beat: 2 },
        { name: 'C', octave: 4, duration: 2, beat: 3 },
      ],
    },
  ],
  leftHandMeasures: [
    // Left Hand (Bass Clef) Measures
    {
      trebleClef: false,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 1,
      notes: [
        { name: 'C', octave: 3, duration: 4, beat: 1 },
      ],
    },
    {
      trebleClef: false,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 2,
      notes: [
        { name: 'F', octave: 3, duration: 4, beat: 1 },
      ],
    },
    {
      trebleClef: false,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 3,
      notes: [
        { name: 'G', octave: 3, duration: 4, beat: 1 },
      ],
    },
    {
      trebleClef: false,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 4,
      notes: [
        { name: 'F', octave: 3, duration: 4, beat: 1 },
      ],
    },
    {
      trebleClef: false,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 5,
      notes: [
        { name: 'C', octave: 3, duration: 4, beat: 1 },
      ],
    },
    {
      trebleClef: false,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 6,
      notes: [
        { name: 'F', octave: 3, duration: 4, beat: 1 },
      ],
    },
    {
      trebleClef: false,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 7,
      notes: [
        { name: 'G', octave: 3, duration: 4, beat: 1 },
      ],
    },
    {
      trebleClef: false,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 8,
      notes: [
        { name: 'F', octave: 3, duration: 4, beat: 1 },
      ],
    },
    {
      trebleClef: false,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 9,
      notes: [
        { name: 'C', octave: 3, duration: 4, beat: 1 },
      ],
    },
    {
      trebleClef: false,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 10,
      notes: [
        { name: 'F', octave: 3, duration: 4, beat: 1 },
      ],
    },
    {
      trebleClef: false,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 11,
      notes: [
        { name: 'G', octave: 3, duration: 4, beat: 1 },
      ],
    },
    {
      trebleClef: false,
      timeSignature: { top: 4, bottom: 4 },
      measureNumber: 12,
      notes: [
        { name: 'F', octave: 3, duration: 4, beat: 1 },
      ],
    },
  ],
};

