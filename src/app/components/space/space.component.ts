import { Component, Input } from '@angular/core';
import { LineOrSpace } from 'src/app/types';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent {
  @Input() spaceData!: LineOrSpace;
}
