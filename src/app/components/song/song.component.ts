import { Component, Input } from '@angular/core';
import { Song } from 'src/app/types';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent {
  @Input() song!: Song;
  curlyBrace: string = '{';
}
