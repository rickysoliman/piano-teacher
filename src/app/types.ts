export type Note = {
  duration: 4 | 2 | 1; // whole note, half note, quarter note
  name: string; // must be capital A - G
  octave: number;
};

export type Measure = {
  notes: Note[];
  timeSignature: number;
  measureNumber: number,
  trebleClef: boolean;
};

export type Song = {
  title: string;
  composer: string;
  bpm: number;
  timeSignature: number;
  trebleClef: boolean;
  measures: Measure[];
};
