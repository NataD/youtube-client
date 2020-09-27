import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'formatDate',
  pure: false
})
export class FormatDatePipe implements PipeTransform {

  constructor() {}

  transform(value: string): string {
    if (value === null || value === undefined) {
      return;
    }
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',       year: 'numeric'
    };

    return new Date(value).toLocaleString('en-US', options);
  }
}
