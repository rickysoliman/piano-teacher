export type Note = {
  duration: 4 | 2 | 1; // whole note, half note, quarter note
  name: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
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
