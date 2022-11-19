import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'percentage', standalone: true })
export class PercentagePipe implements PipeTransform {
  transform(value: number): String {
    return String(Math.round(value * 1000) / 10) + '%';
  }
}
