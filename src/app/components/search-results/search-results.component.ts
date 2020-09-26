import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import mockedData from "./mocked-data";
import {SearchResults} from "../../models/search-result.model";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  searchItems$: Observable<any>;
  @Input() searchInput: string;
  @Input() sortingCriteria: string;
  @Input() asc: boolean;

  constructor(
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.searchItems$ = of(mockedData).pipe(
      map(resp => {
        console.log(SearchResults.fromRaw(resp));
        return SearchResults.fromRaw(resp);
      }),
      catchError((err: any) => {
        // this.router.navigate(['invalid-url']);
        this.cd.detectChanges();
        return of(err);
      }),
    );
  }

}
