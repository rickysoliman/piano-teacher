import { Component, Input } from '@angular/core';
import { LineOrSpace, NoteOrRestData } from 'src/app/types';

@Component({
  selector: 'app-line-or-space',
  templateUrl: './line-or-space.component.html',
  styleUrls: ['./line-or-space.component.scss']
})
export class LineOrSpaceComponent {
  @Input() lineOrSpaceData!: LineOrSpace;
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

  getWidth(timeSignature: number): string {
    const widthPercentage = 100 / timeSignature;
    return `${widthPercentage}%`;
  }

  hasNoteOnBeat(beat: any): boolean {
    return this.lineOrSpaceData.contents?.some((note) => note['beat'] === beat);
  }
}
