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
  duration: number;
};

export type Note = {
  name: string; // must be capital A - G or rest
  octave: number | null; // null if rest instead of note
  duration: number; // whole note, half note, quarter note
  beat: number;
};

export type Measure = {
  trebleClef: boolean;
  timeSignature: TimeSignature;
  measureNumber: number;
  notes: Note[];
};

type TimeSignature = {
  top: number;
  bottom: number;
};

export type Song = {
  title: string;
  composer: string;
  bpm: number;
  timeSignature: TimeSignature;
  grandStaff: boolean;
  rightHandTreble: boolean;
  leftHandTreble?: boolean; // not present if grandStaff is false
  rightHandMeasures: Measure[];
  leftHandMeasures?: Measure[]; // not present if grandStaff is false
};
