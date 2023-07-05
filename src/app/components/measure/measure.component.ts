import { Component, Input } from '@angular/core';
import { Measure } from 'src/app/types';

@Component({
  selector: 'app-measure',
  templateUrl: './measure.component.html',
  styleUrls: ['./measure.component.scss']
})
export class MeasureComponent {
  @Input() measureData!: Measure;
}
