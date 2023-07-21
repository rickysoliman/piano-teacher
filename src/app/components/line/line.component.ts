import { Component, Input } from '@angular/core';
import { LineOrSpace } from 'src/app/types';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent {
  @Input() lineData!: LineOrSpace;

  ngOnInit() {
    console.log({ lineData: this.lineData });
  }

  getRange(num: number): number[] {
    return Array.from({ length: num }, (_, index) => index);
  }

  getLineWidth(timeSignature: number): string {
    const widthPercentage = 100 / timeSignature;
    return `${widthPercentage}%`;
  }
}
