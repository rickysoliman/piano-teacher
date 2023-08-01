import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LineOrSpace, NoteOrRestData } from 'src/app/types';

@Component({
  selector: 'app-line-or-space',
  templateUrl: './line-or-space.component.html',
  styleUrls: ['./line-or-space.component.scss']
})
export class LineOrSpaceComponent {
  @Input() lineOrSpaceData!: LineOrSpace;
  @Input() selectedCursorOption!: string | null;
  @Output() addNoteEvent = new EventEmitter<any>();
  beatData: any = {};
  imagePaths: any = {
    '1': '../../../assets/quarter-note.png',
    '2': '../../../assets/half-note.png',
    '4': '../../../assets/whole-note.png',
  };
  noteClasses: any = {};

  ngOnInit() {
    if (this.lineOrSpaceData.contents) {
      this.lineOrSpaceData.contents.forEach((note: NoteOrRestData) => {
        this.beatData[note.beat] = note.duration;
      });
    }

    this.noteClasses = {
      '1': `quarter-note-${this.lineOrSpaceData.isLine ? 'line' : 'space'}`,
      '2': `half-note-${this.lineOrSpaceData.isLine ? 'line' : 'space'}`,
      '4': `whole-note-${this.lineOrSpaceData.isLine ? 'line' : 'space'}`,
    };
  }

  getRange(num: number): number[] {
    return Array.from({ length: num }, (_, index) => index);
  }

  hasNoteOnBeat(beat: any): boolean {
    if (this.lineOrSpaceData.contents && Array.isArray(this.lineOrSpaceData.contents)) {
      return this.lineOrSpaceData.contents.some((note) => note['beat'] === beat);
    }
    return false;
  }

  addNote(event: Event, beat: number) {
    if (this.selectedCursorOption) {
      this.addNoteEvent.emit({
        id: this.lineOrSpaceData.id,
        beat,
      });
    }
  }
}
