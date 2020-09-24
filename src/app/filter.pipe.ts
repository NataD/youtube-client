import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from './models/search-item.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // public transform(items: SearchItem[], search: string = ''): SearchItem[] {
  //   if (!search.trim()) {
  //     console.log(items);
  //     return items;
  //   }
  //   return items.filter((item) => {
  //     return item.snippet.title.toLowerCase().includes(search.toLowerCase());
  //   });
  // }
  // console.log('term', term);
    public transform(items: any[], term): any {
      console.log(items);
      console.log('TERM', term);
      return term
          ? items.filter(item => item.title.indexOf(term) !== -1)
          : items;
        }

}
