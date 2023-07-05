export type Note = {
  duration: 4 | 2 | 1; // whole note, half note, quarter note
  name: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
};

export type Measure = {
  notes: Note[];
  timeSignature: number; // should only be 4 or 3
};

export type Song = {
  title: string;
  composer: string;
  bpm: number;
  timeSignature: number; // should only be 4 or 3
  trebleClef: boolean;
  measures: Measure[];
};
