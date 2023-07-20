import { Component, Input } from '@angular/core';
import { LineOrSpace } from 'src/app/types';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent {
  @Input() lineData!: LineOrSpace;
}
