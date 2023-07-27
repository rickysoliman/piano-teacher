export type NoteOrRestData = {
  id: string;
  duration: number;
  beat: number;
}

export type LineOrSpace = {
  id: string; // represents the line or space's note name and octave
  timeSignature: TimeSignature;
  ledger: boolean; // true if note is outside scope of the staff
  isLine: boolean; // true if line, false if space
  contents: NoteOrRestData[];
};

export type Rest = {
  duration: 4 | 2 | 1;
};

export type Note = {
  duration: 4 | 2 | 1; // whole note, half note, quarter note
  name: string; // must be capital A - G
  octave: number;
  beat: number;
};

export type Measure = {
  notes: Note[];
  timeSignature: TimeSignature;
  measureNumber: number,
  trebleClef: boolean;
};

type TimeSignature = {
  top: number,
  bottom: number,
};
export type Song = {
  title: string;
  composer: string;
  bpm: number;
  timeSignature: TimeSignature;
  trebleClef: boolean;
  measures: Measure[];
};
