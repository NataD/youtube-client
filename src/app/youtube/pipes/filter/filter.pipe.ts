import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  public transform(items: SearchItem[], term: string): any {
    return term
      ? items.filter(item => item.snippet.title.toLowerCase().indexOf(term) !== -1)
      : items;
    }
}
