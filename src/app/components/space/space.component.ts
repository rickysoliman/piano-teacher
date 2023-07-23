import { Component, Input } from '@angular/core';
import { LineOrSpace, NoteOrRestData } from 'src/app/types';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent {
  @Input() spaceData!: LineOrSpace;
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
    if (this.spaceData.contents !== null) console.log({ spaceData: this.spaceData });
    if (this.spaceData.contents) {
      this.spaceData.contents.forEach((note: NoteOrRestData) => {
        this.beatData[note.beat] = note.duration;
      });
      console.log({ beatData: this.beatData });
    }
  }

  getRange(num: number): number[] {
    return Array.from({ length: num }, (_, index) => index);
  }

  getSpaceWidth(timeSignature: number): string {
    const widthPercentage = 100 / timeSignature;
    return `${widthPercentage}%`;
  }

  hasNoteOnBeat(beat: any): boolean {
    return this.spaceData.contents?.some((note) => note['beat'] === beat);
  }
}
