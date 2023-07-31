import { Component, Input } from '@angular/core';
import { Song } from 'src/app/types';
import { cursorOptions } from './song.constants';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent {
  @Input() song!: Song;
  grandStaffRows: any = [];
  cursorOptions = cursorOptions;

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
  }

  selectOption(option: any) {
    // Deselect all other options
    Object.keys(this.cursorOptions).forEach((optionType) => {
      const typedOptionType = optionType as keyof typeof this.cursorOptions;
      this.cursorOptions[typedOptionType].forEach((opt: any) => {
        if (opt !== option) {
          opt.selected = false;
        }
      });
    });

    option.selected = !option.selected;
  }
}
