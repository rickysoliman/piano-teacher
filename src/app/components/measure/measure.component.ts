import { Component, Input } from '@angular/core';
import { Measure, Note, NoteOrRestData, Rest } from 'src/app/types';

@Component({
  selector: 'app-measure',
  templateUrl: './measure.component.html',
  styleUrls: ['./measure.component.scss']
})
export class MeasureComponent {
  @Input() measureData!: Measure;
  noteData: any = {};
  restData: any = [];
  restImagePaths: any = {
    '1': '../../../assets/quarter-rest.png',
    '2': '../../../assets/half-or-whole-rest.png',
    '4': '../../../assets/half-or-whole-rest.png',
  };
  restClasses: any = {
    '1': 'quarter-rest',
    '2': 'half-rest',
    '4': 'whole-rest',
  };

  ngOnInit() {
    console.log({ measureData: this.measureData });
    this.generateNoteAndRestData();
  }

  generateNoteAndRestData() {
    this.restData = new Array(this.measureData.timeSignature.top).fill(null);

    this.measureData.notes.forEach(note => {
      if (note.name === 'rest') {
        this.restData[note.beat - 1] = note.duration;
      } else {
        const id = note.name + note.octave;
        if (!this.noteData[id]) {
          this.noteData[id] = [];
        }
        this.noteData[id].push({
          duration: note.duration,
          beat: note.beat,
        });
      }
    });
    console.log({ noteData: this.noteData, restData: this.restData });
  }

  getRestStyles(index: number): any {
    return {
      'left.%': ((100 / this.measureData.timeSignature.top) * index) + 5
    };
  }

  getNotePosition(note: Note): string {
    const nameAndOctave = note.name + note.octave;
    const linePositionMap: Partial<Record<Note['name'], string>> = {
      'E4': '24px',
      'G4': '3px',
      'B4': '-19px',
      'D5': '80px',
      'F5': '100px',
    };

    const spacePositionMap: Partial<Record<Note['name'], string>> = {
      'F4': '14px',
      'A4': '-8px',
      'C5': '-30px',
      'E5': '70px',
    };

    const position = linePositionMap[nameAndOctave] || spacePositionMap[nameAndOctave];

    return position || '0';
  }
}
