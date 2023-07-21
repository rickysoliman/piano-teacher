import { Component, Input } from '@angular/core';
import { LineOrSpace } from 'src/app/types';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent {
  @Input() spaceData!: LineOrSpace;

  ngOnInit() {
    // console.log({ spaceData: this.spaceData });
  }

  getRange(num: number): number[] {
    return Array.from({ length: num }, (_, index) => index);
  }

  getSpaceWidth(timeSignature: number): string {
    const widthPercentage = 100 / timeSignature;
    return `${widthPercentage}%`;
  }

  hasQuarterNoteOnBeat(beat: any): boolean {
    return this.spaceData.contents?.some((note) => note['beat'] === beat);
  }
}
