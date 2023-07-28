import { Song } from "./types";

export const songWithMixedNotesAndRests: Song = {
  title: 'Mixed Notes and Rests',
  composer: 'ChatGPT',
  bpm: 120,
  timeSignature: { top: 4, bottom: 4 },
  trebleClef: false, // Using bass clef
  measures: [
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: false, // Using bass clef
      measureNumber: 1,
      notes: [
        { duration: 4, name: 'rest', octave: null, beat: 1 }, // Whole rest on beat 1
      ],
    },
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: false, // Using bass clef
      measureNumber: 2,
      notes: [
        { duration: 1, name: 'A', octave: 3, beat: 1 }, // Quarter note A3 on beat 1
        { duration: 1, name: 'rest', octave: null, beat: 2 }, // Quarter rest on beat 2
        { duration: 1, name: 'B', octave: 3, beat: 3 }, // Quarter note B3 on beat 3
        { duration: 1, name: 'C', octave: 3, beat: 4 }, // Quarter note C3 on beat 4
      ],
    },
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: false, // Using bass clef
      measureNumber: 3,
      notes: [
        { duration: 2, name: 'rest', octave: null, beat: 1 }, // Half rest on beat 1
        { duration: 2, name: 'D', octave: 3, beat: 3 }, // Half note D3 on beat 3
      ],
    },
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: false, // Using bass clef
      measureNumber: 4,
      notes: [
        { duration: 2, name: 'E', octave: 3, beat: 1 }, // Half note E3 on beat 1
        { duration: 2, name: 'rest', octave: null, beat: 3 }, // Half rest on beat 3
      ],
    },
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: false, // Using bass clef
      measureNumber: 5,
      notes: [
        { duration: 4, name: 'F', octave: 3, beat: 1 }, // Whole note F3 on beat 1
      ],
    },
  ],
};

export const songWithHalfAndWholeRests: Song = {
  title: 'Whole and Half Rests',
  composer: 'You', // Replace with your name or desired composer
  bpm: 100,
  timeSignature: { top: 4, bottom: 4 },
  trebleClef: true,
  measures: [
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 1,
      notes: [
        { duration: 4, name: 'rest', octave: null, beat: 1 },
      ],
    },
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 2,
      notes: [
        { duration: 1, name: 'E', octave: 4, beat: 1 },
        { duration: 1, name: 'D', octave: 4, beat: 2 },
        { duration: 2, name: 'rest', octave: null, beat: 3 },
      ],
    },
  ],
};

export const wholeNotecMajorScale: Song = {
  title: 'C Major Scale (Bass Clef)',
  composer: 'You', // Replace with your name or desired composer
  bpm: 100,
  timeSignature: { top: 4, bottom: 4 },
  trebleClef: false, // Using bass clef now
  measures: [
    // Measure 1 - C3
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: false,
      measureNumber: 1,
      notes: [
        { duration: 4, name: 'C', octave: 3, beat: 1 },
      ],
    },
    // Measure 2 - D3
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: false,
      measureNumber: 2,
      notes: [
        { duration: 4, name: 'D', octave: 3, beat: 1 },
      ],
    },
    // Measure 3 - E3
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: false,
      measureNumber: 3,
      notes: [
        { duration: 4, name: 'E', octave: 3, beat: 1 },
      ],
    },
    // Measure 4 - F3
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: false,
      measureNumber: 4,
      notes: [
        { duration: 4, name: 'F', octave: 3, beat: 1 },
      ],
    },
    // Measure 5 - G3
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: false,
      measureNumber: 5,
      notes: [
        { duration: 4, name: 'G', octave: 3, beat: 1 },
      ],
    },
    // Measure 6 - A3
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: false,
      measureNumber: 6,
      notes: [
        { duration: 4, name: 'A', octave: 3, beat: 1 },
      ],
    },
    // Measure 7 - B3
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: false,
      measureNumber: 7,
      notes: [
        { duration: 4, name: 'B', octave: 3, beat: 1 },
      ],
    },
    // Measure 8 - C4
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: false,
      measureNumber: 8,
      notes: [
        { duration: 4, name: 'C', octave: 4, beat: 1 },
      ],
    },
  ],
};


export const twinkleTwinkleLittleStar: Song = {
  title: 'Twinkle, Twinkle, Little Star',
  composer: 'Traditional',
  bpm: 100,
  timeSignature: { top: 4, bottom: 4 },
  trebleClef: true,
  measures: [
    // Measure 1
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 1,
      notes: [
        { duration: 1, name: 'C', octave: 4, beat: 1 },
        { duration: 1, name: 'C', octave: 4, beat: 2 },
        { duration: 1, name: 'G', octave: 4, beat: 3 },
        { duration: 1, name: 'G', octave: 4, beat: 4 },
      ],
    },
    // Measure 2
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 2,
      notes: [
        { duration: 1, name: 'A', octave: 4, beat: 1 },
        { duration: 1, name: 'A', octave: 4, beat: 2 },
        { duration: 1, name: 'G', octave: 4, beat: 3 },
        { duration: 1, name: 'rest', octave: null, beat: 4 },
      ],
    },
    // Measure 3
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 3,
      notes: [
        { duration: 1, name: 'F', octave: 4, beat: 1 },
        { duration: 1, name: 'F', octave: 4, beat: 2 },
        { duration: 1, name: 'E', octave: 4, beat: 3 },
        { duration: 1, name: 'E', octave: 4, beat: 4 },
      ],
    },
    // Measure 4
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 4,
      notes: [
        { duration: 1, name: 'D', octave: 4, beat: 1 },
        { duration: 1, name: 'D', octave: 4, beat: 2 },
        { duration: 1, name: 'C', octave: 4, beat: 3 },
        { duration: 1, name: 'rest', octave: null, beat: 4 },
      ],
    },
    // Measure 5
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 5,
      notes: [
        { duration: 1, name: 'G', octave: 4, beat: 1 },
        { duration: 1, name: 'G', octave: 4, beat: 2 },
        { duration: 1, name: 'F', octave: 4, beat: 3 },
        { duration: 1, name: 'F', octave: 4, beat: 4 },
      ],
    },
    // Measure 6
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 6,
      notes: [
        { duration: 1, name: 'E', octave: 4, beat: 1 },
        { duration: 1, name: 'E', octave: 4, beat: 2 },
        { duration: 1, name: 'D', octave: 4, beat: 3 },
        { duration: 1, name: 'rest', octave: null, beat: 4 },
      ],
    },
    // Measure 6
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 6,
      notes: [
        { duration: 1, name: 'G', octave: 4, beat: 1 },
        { duration: 1, name: 'G', octave: 4, beat: 2 },
        { duration: 1, name: 'F', octave: 4, beat: 3 },
        { duration: 1, name: 'F', octave: 4, beat: 4 },
      ],
    },
    // Measure 7
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 7,
      notes: [
        { duration: 1, name: 'E', octave: 4, beat: 1 },
        { duration: 1, name: 'E', octave: 4, beat: 2 },
        { duration: 1, name: 'D', octave: 4, beat: 3 },
        { duration: 1, name: 'rest', octave: null, beat: 4 },
      ],
    },
    // Measure 8
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 8,
      notes: [
        { duration: 1, name: 'C', octave: 4, beat: 1 },
        { duration: 1, name: 'C', octave: 4, beat: 2 },
        { duration: 1, name: 'G', octave: 4, beat: 3 },
        { duration: 1, name: 'G', octave: 4, beat: 4 },
      ],
    },
    // Measure 9
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 9,
      notes: [
        { duration: 1, name: 'A', octave: 4, beat: 1 },
        { duration: 1, name: 'A', octave: 4, beat: 2 },
        { duration: 1, name: 'G', octave: 4, beat: 3 },
        { duration: 1, name: 'rest', octave: null, beat: 4 },
      ],
    },
    // Measure 10
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 10,
      notes: [
        { duration: 1, name: 'F', octave: 4, beat: 1 },
        { duration: 1, name: 'F', octave: 4, beat: 2 },
        { duration: 1, name: 'E', octave: 4, beat: 3 },
        { duration: 1, name: 'E', octave: 4, beat: 4 },
      ],
    },
    // Measure 11
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 11,
      notes: [
        { duration: 1, name: 'D', octave: 4, beat: 1 },
        { duration: 1, name: 'D', octave: 4, beat: 2 },
        { duration: 2, name: 'C', octave: 4, beat: 3 },
      ],
    },
  ],
};

export const greensleeves: Song = {
  title: 'Greensleeves',
  composer: 'Traditional',
  bpm: 80,
  timeSignature: { top: 3, bottom: 4 },
  trebleClef: true,
  measures: [
    // Measure 1
    {
      timeSignature: { top: 3, bottom: 4 },
      trebleClef: true,
      measureNumber: 1,
      notes: [
        { duration: 1, name: 'C', octave: 4, beat: 1 },
        { duration: 1, name: 'C', octave: 4, beat: 2 },
        { duration: 1, name: 'C', octave: 4, beat: 3 },
      ],
    },
    // Measure 2
    {
      timeSignature: { top: 3, bottom: 4 },
      trebleClef: true,
      measureNumber: 2,
      notes: [
        { duration: 1, name: 'D', octave: 4, beat: 1 },
        { duration: 1, name: 'E', octave: 4, beat: 2 },
        { duration: 1, name: 'D', octave: 4, beat: 3 },
      ],
    },
    // Measure 3
    {
      timeSignature: { top: 3, bottom: 4 },
      trebleClef: true,
      measureNumber: 3,
      notes: [
        { duration: 2, name: 'E', octave: 4, beat: 1 },
        { duration: 1, name: 'C', octave: 4, beat: 3 },
      ],
    },
    // Measure 4
    {
      timeSignature: { top: 3, bottom: 4 },
      trebleClef: true,
      measureNumber: 4,
      notes: [
        { duration: 1, name: 'E', octave: 4, beat: 1 },
        { duration: 1, name: 'D', octave: 4, beat: 2 },
        { duration: 1, name: 'C', octave: 4, beat: 3 },
      ],
    },
    // Measure 5
    {
      timeSignature: { top: 3, bottom: 4 },
      trebleClef: true,
      measureNumber: 5,
      notes: [
        { duration: 1, name: 'D', octave: 4, beat: 1 },
        { duration: 1, name: 'E', octave: 4, beat: 2 },
        { duration: 1, name: 'D', octave: 4, beat: 3 },
      ],
    },
    // Measure 6
    {
      timeSignature: { top: 3, bottom: 4 },
      trebleClef: true,
      measureNumber: 6,
      notes: [
        { duration: 2, name: 'E', octave: 4, beat: 1 },
        { duration: 1, name: 'C', octave: 4, beat: 3 },
      ],
    },
    // Measure 7
    {
      timeSignature: { top: 3, bottom: 4 },
      trebleClef: true,
      measureNumber: 7,
      notes: [
        { duration: 1, name: 'G', octave: 4, beat: 1 },
        { duration: 1, name: 'F', octave: 4, beat: 2 },
        { duration: 1, name: 'E', octave: 4, beat: 3 },
      ],
    },
    // Measure 8
    {
      timeSignature: { top: 3, bottom: 4 },
      trebleClef: true,
      measureNumber: 8,
      notes: [
        { duration: 1, name: 'F', octave: 4, beat: 1 },
        { duration: 1, name: 'E', octave: 4, beat: 2 },
        { duration: 1, name: 'D', octave: 4, beat: 3 },
      ],
    },
    // Measure 9
    {
      timeSignature: { top: 3, bottom: 4 },
      trebleClef: true,
      measureNumber: 9,
      notes: [
        { duration: 2, name: 'E', octave: 4, beat: 1 },
        { duration: 1, name: 'C', octave: 4, beat: 3 },
      ],
    },
  ],
};




export const maryHadALittleLamb: Song = {
  title: 'Mary Had a Little Lamb',
  composer: 'Traditional',
  bpm: 120,
  timeSignature: { top: 4, bottom: 4 },
  trebleClef: true,
  measures: [
    // Measure 1
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 1,
      notes: [
        { duration: 1, name: 'E', octave: 4, beat: 1 },
        { duration: 1, name: 'D', octave: 4, beat: 2 },
        { duration: 1, name: 'C', octave: 4, beat: 3 },
        { duration: 1, name: 'D', octave: 4, beat: 4 },
      ],
    },
    // Measure 2
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 2,
      notes: [
        { duration: 1, name: 'E', octave: 4, beat: 1 },
        { duration: 1, name: 'E', octave: 4, beat: 2 },
        { duration: 2, name: 'E', octave: 4, beat: 3 },
      ],
    },
    // Measure 3
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 3,
      notes: [
        { duration: 1, name: 'D', octave: 4, beat: 1 },
        { duration: 1, name: 'D', octave: 4, beat: 2 },
        { duration: 2, name: 'D', octave: 4, beat: 3 },
      ],
    },
    // Measure 4
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 4,
      notes: [
        { duration: 1, name: 'E', octave: 4, beat: 1 },
        { duration: 1, name: 'G', octave: 4, beat: 2 },
        { duration: 2, name: 'G', octave: 4, beat: 3 },
      ],
    },
    // Measure 5
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 5,
      notes: [
        { duration: 1, name: 'E', octave: 4, beat: 1 },
        { duration: 1, name: 'D', octave: 4, beat: 2 },
        { duration: 1, name: 'C', octave: 4, beat: 3 },
        { duration: 1, name: 'D', octave: 4, beat: 4 },
      ],
    },
    // Measure 6
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 6,
      notes: [
        { duration: 1, name: 'E', octave: 4, beat: 1 },
        { duration: 1, name: 'E', octave: 4, beat: 2 },
        { duration: 1, name: 'E', octave: 4, beat: 3 },
        { duration: 1, name: 'E', octave: 4, beat: 4 },
      ],
    },
    // Measure 7
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 7,
      notes: [
        { duration: 1, name: 'D', octave: 4, beat: 1 },
        { duration: 1, name: 'D', octave: 4, beat: 2 },
        { duration: 1, name: 'E', octave: 4, beat: 3 },
        { duration: 1, name: 'D', octave: 4, beat: 4 },
      ],
    },
    // Measure 8
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 8,
      notes: [
        { duration: 2, name: 'C', octave: 4, beat: 1 },
      ],
    },
  ],
};

export const cMajorScale: Song = {
  title: 'Ascending and Descending C Major Scale',
  composer: 'Generated by AI',
  bpm: 120,
  timeSignature: { top: 4, bottom: 4 },
  trebleClef: true,
  measures: [
    // First bar: Quarter notes ascending C major scale from middle C
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 1,
      notes: [
        { duration: 1, name: 'C', octave: 4, beat: 1 },
        { duration: 1, name: 'D', octave: 4, beat: 2 },
        { duration: 1, name: 'E', octave: 4, beat: 3 },
        { duration: 1, name: 'F', octave: 4, beat: 4 },
      ],
    },
    // Second bar: Quarter notes continuing ascending C major scale
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 2,
      notes: [
        { duration: 1, name: 'G', octave: 4, beat: 1 },
        { duration: 1, name: 'A', octave: 4, beat: 2 },
        { duration: 1, name: 'B', octave: 4, beat: 3 },
        { duration: 1, name: 'C', octave: 5, beat: 4 },
      ],
    },
    // Third bar: Quarter notes descending C major scale starting on high C
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 3,
      notes: [
        { duration: 1, name: 'C', octave: 5, beat: 1 },
        { duration: 1, name: 'B', octave: 4, beat: 2 },
        { duration: 1, name: 'A', octave: 4, beat: 3 },
        { duration: 1, name: 'G', octave: 4, beat: 4 },
      ],
    },
    // Fourth bar: Quarter notes continuing descending C major scale
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 4,
      notes: [
        { duration: 1, name: 'F', octave: 4, beat: 1 },
        { duration: 1, name: 'E', octave: 4, beat: 2 },
        { duration: 1, name: 'D', octave: 4, beat: 3 },
        { duration: 1, name: 'C', octave: 4, beat: 4 },
      ],
    },
    // Fifth bar: Half notes ascending C major scale from middle C
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 5,
      notes: [
        { duration: 2, name: 'C', octave: 4, beat: 1 },
        { duration: 2, name: 'D', octave: 4, beat: 3 },
      ],
    },
    // Sixth bar: Half notes continuing ascending C major scale
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 6,
      notes: [
        { duration: 2, name: 'E', octave: 4, beat: 1 },
        { duration: 2, name: 'F', octave: 4, beat: 3 },
      ],
    },
    // Seventh bar: Half notes descending C major scale starting on high C
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 7,
      notes: [
        { duration: 2, name: 'G', octave: 4, beat: 1 },
        { duration: 2, name: 'A', octave: 4, beat: 3 },
      ],
    },
    // Eighth bar: Half notes continuing descending C major scale
    {
      timeSignature: { top: 4, bottom: 4 },
      trebleClef: true,
      measureNumber: 8,
      notes: [
        { duration: 2, name: 'B', octave: 4, beat: 1 },
        { duration: 2, name: 'C', octave: 5, beat: 3 },
      ],
    },
  ],
};
