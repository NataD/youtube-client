import { Component, OnInit } from '@angular/core';
import { FilterListenersService } from '../../services/filter-listeners/filter-listeners.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public searchInput: string;
  ascending: boolean = false;

  constructor(private filterListenersService: FilterListenersService) { }

  ngOnInit() {
  }

  inputChange = (event: any) => {
    this.filterListenersService.filterInputChange.next(event);
  }

  sortBy = (criteria: string) => {
    this.filterListenersService.sortResultsBy.next(criteria);
    this.filterListenersService.ascendingOrder.next(!this.ascending);
  }
}
