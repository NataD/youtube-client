import { Component, OnInit } from '@angular/core';
import { FilterListenersService } from './../../../core/services/filter-listeners/filter-listeners.service';
import { ShowResultsService } from './../../../core/services/show-results/show-results.service';
import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
import {SearchResults} from "../../models/search-result.model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  searchItemsShown: boolean = false;
  searchInput: string = '';
  sortingCriteria: string = '';
  ascending: boolean = false;
  inputTouched = false;
  loading = false;
  videos: any[] = [];

  constructor(
    private filterListenersService: FilterListenersService,
    private showResultsService: ShowResultsService,
    private searchService: SearchService
  ) {
    this.filterListenersService.filterInputChange.subscribe((input: string) => {
      this.searchInput = input;
    });

    this.filterListenersService.sortResultsBy.subscribe((criteria: string) => {
      this.sortingCriteria = criteria;
    });

    this.filterListenersService.ascendingOrder.subscribe((ascending: boolean) => {
      this.ascending = ascending;
    });

    this.showResultsService.showResults.subscribe((showResults: boolean) => {
      this.searchItemsShown = showResults;
    })
  }

  ngOnInit() {
  }

  // handleSearch(inputValue: string) {
  //   this.loading = true;
  //   this.searchService.getVideos(inputValue)
  //     .subscribe((items: any) => {
  //       console.log('items', items);
  //       this.videos = items.map(item => {
  //         console.log('item', item);
  //         return SearchItem.fromRaw(item);
  //
  //         // return {
  //         //   title: item.snippet.title,
  //         //   videoId: item.id.videoId,
  //         //   videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
  //         //   channelId: item.snippet.channelId,
  //         //   channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
  //         //   channelTitle: item.snippet.channelTitle,
  //         //   description: item.snippet.description,
  //         //   publishedAt: new Date(item.snippet.publishedAt),
  //         //   thumbnail: item.snippet.thumbnails.high.url
  //         // };
  //       });
  //       this.inputTouched = true;
  //       this.loading = false;
  //     });
  // }

//   handleSearch(inputValue: string) {
//     this.loading = true;
//     this.searchService.getVideos(inputValue)
//       .pipe(
//         map((items: any) => {
//         console.log('items', items);
//         let results = items.map(item => {
//           console.log('item', item);
//           return item;
//
//           // return {
//           //   title: item.snippet.title,
//           //   videoId: item.id.videoId,
//           //   videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
//           //   channelId: item.snippet.channelId,
//           //   channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
//           //   channelTitle: item.snippet.channelTitle,
//           //   description: item.snippet.description,
//           //   publishedAt: new Date(item.snippet.publishedAt),
//           //   thumbnail: item.snippet.thumbnails.high.url
//           // };
//         });
//         console.log('rrrrr', results);
//         return results;
//         // this.inputTouched = true;
//         // this.loading = false;
//       //  return this.videos;
//       }),
//       map((response: any) => {
//         this.inputTouched = true;
//         this.loading = false;
//         console.log('*********', response);
//         let items = [];
//         response.map(item => {
//           this.searchService.getVideoStatistics(item.id.videoId).pipe(
//             map((resp: any) => {
//             console.log('aaaa', resp);
//             // return SearchResult.from(resp);
//             // console.log('pppppp', this.videos.push(resp));
//             return items.push(resp);
//           })
//         ).subscribe()
//
//         });
//
// console.log('%%%%%%%%%%%%', items);
// // return items;
//       //  console.log('vvvvvvvvvvv', this.videos);
//       //  return this.videos;
//     }),
//     map((items) => console.log('^^^^^^^^', items))
//     ).subscribe();
//   }

handleSearch(inputValue: string) {
  this.loading = true;
  this.searchService.getVideos(inputValue)
    .pipe(
      map((items: any) => {
      console.log('items', items);
      return items.map(item => {
        console.log('item', item);
        return item.id.videoId;
      });
    }),
    switchMap((response: any) => this.searchService.getVideoStatistics(response).pipe(
        map((resp: any) => {
          let items = [];
          console.log('aaaa', resp);
          return resp;
        })
      )
  ),
  map((items) => {
    console.log('^^^^^^^^', items);
    this.videos = items;
    this.inputTouched = true;
           this.loading = false;
  })
  ).subscribe();
}
}
