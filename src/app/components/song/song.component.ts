import { Component, Input } from '@angular/core';
import { Song } from 'src/app/types';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent {
  @Input() song!: Song;
  grandStaffRows: any = [];

  ngOnInit() {
    if (this.song.grandStaff) {
      this.groupMeasuresIntoRows();
    }
  }

  groupMeasuresIntoRows() {
    const measuresPerRow = 4;
    const { rightHandMeasures } = this.song;
    const { leftHandMeasures } = this.song;

    for (let i = 0; i < rightHandMeasures.length; i += measuresPerRow) {
      const row = {
        rightHandMeasures: rightHandMeasures.slice(i, i + measuresPerRow),
        leftHandMeasures: leftHandMeasures!.slice(i, i + measuresPerRow),
      };

      this.grandStaffRows.push(row);
    }
    console.log({ grandStaffRows: this.grandStaffRows });
  }
}
