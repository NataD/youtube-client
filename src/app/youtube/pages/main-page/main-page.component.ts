import { Component, OnInit } from '@angular/core';
import { FilterListenersService } from './../../../core/services/filter-listeners/filter-listeners.service';
import { ShowResultsService } from './../../../core/services/show-results/show-results.service';
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

  constructor(
    private filterListenersService: FilterListenersService,
    private showResultsService: ShowResultsService
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

}
