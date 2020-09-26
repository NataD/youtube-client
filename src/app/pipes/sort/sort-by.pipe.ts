import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from './../../models/search-item.model';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(items: SearchItem[], sortedBy: string): any {
    if(!sortedBy) {
      return items;
    }

    if (sortedBy === 'viewCount') {
      this.sortByViews(items, true);
    }

    if (sortedBy === 'publishedAt') {
      this.sortByDate(items, true);
    }

    return items;
  }


  sortByViews(result: SearchItem[], increase: boolean): void {
    result.sort((a: SearchItem, b: SearchItem) => {
      const view1: number = +a.statistics.viewCount;
      const view2: number = +b.statistics.viewCount;

      if(increase) {
        return view1 - view2;
      }

      return view2 - view1;
    });
  };

  sortByDate(result: SearchItem[], increase: boolean): void {
   result.sort((a: SearchItem, b: SearchItem) => {
     const date1: Date = new Date(a.snippet.publishedAt);
     const date2: Date = new Date(b.snippet.publishedAt);

     if(increase) {
       return +date1 - +date2;
     }

     return +date2 - +date1;
   });
  }
}
