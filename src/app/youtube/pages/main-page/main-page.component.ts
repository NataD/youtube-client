import { Component, OnInit } from '@angular/core';
import { FilterListenersService } from '../../services/filter-listeners/filter-listeners.service';
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
  settingsShown: boolean = false;
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

toggleSettings(event: boolean) {
  console.log(event);
  this.settingsShown = event;
}
}
