import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Measure, Note, Song } from 'src/app/types';
import { cursorOptions } from './song.constants';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent {
  @Input() song!: Song;
  grandStaffRows: any = [];
  cursorOptions: any = cursorOptions;
  selectedCursorOption: string | null = null;
  durations: any = {
    'quarter': 1,
    'half': 2,
    'whole': 4,
  };

  constructor(private cdRef: ChangeDetectorRef) {}

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
    this.selectedCursorOption = option.name;
  }

  addNote(data: any) {
    if (this.selectedCursorOption) {
      const { measureNumber, beat, id } = data.noteData;
      const octave = Number(id[1]);
      const name = id[0];

      const newNote: Note = {
        name,
        octave,
        duration: this.durations[this.selectedCursorOption],
        beat,
      };

      this.song.rightHandMeasures[measureNumber - 1].notes[beat - 1] = newNote;
      this.cdRef.markForCheck();
      console.log({ song: this.song });
    }
  }
}
