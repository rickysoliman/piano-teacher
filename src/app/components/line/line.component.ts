import { Component, Input } from '@angular/core';
import { LineOrSpace, NoteOrRestData } from 'src/app/types';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent {
  @Input() lineData!: LineOrSpace;
  beatData: any = {};
  imagePaths: any = {
    '1': '../../../assets/quarter-note.png',
    '2': '../../../assets/half-note.png',
  };
  noteClasses: any = {
    '1': 'quarter-note',
    '2': 'half-note',
  };

  ngOnInit() {
    console.log({ lineData: this.lineData });
    if (this.lineData.contents) {
      this.lineData.contents.forEach((note: NoteOrRestData) => {
        this.beatData[note.beat] = note.duration;
      });
      console.log({ beatData: this.beatData });
    }
  }

  getRange(num: number): number[] {
    return Array.from({ length: num }, (_, index) => index);
  }

  getLineWidth(timeSignature: number): string {
    const widthPercentage = 100 / timeSignature;
    return `${widthPercentage}%`;
  }

  hasNoteOnBeat(beat: any): boolean {
    return this.lineData.contents?.some((note) => note['beat'] === beat);
  }
}
