import { Component, OnInit } from '@angular/core';
import { FilterListenersService } from './../../services/filter-listeners.service';

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

  constructor(private filterListenersService: FilterListenersService) {
    this.filterListenersService.filterInputChange.subscribe((input: string) => {
      this.searchInput = input;
    });

    this.filterListenersService.sortResultsBy.subscribe((criteria: string) => {
      console.log('in main page', criteria);
      this.sortingCriteria = criteria;
    });

    this.filterListenersService.ascendingOrder.subscribe((ascending: boolean) => {
      console.log('in main page', ascending);
      this.ascending = ascending;
    });
}

  ngOnInit() {
  }

  searchItems = () => {
    return this.searchItemsShown = !this.searchItemsShown;
  }
}
