import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  resultsShown: boolean = false;
  settingsShown: boolean = false;
  @ViewChild('searchInput') inputElement: ElementRef;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngAfterViewInit() {
  fromEvent(this.inputElement.nativeElement, 'keyup')
    .pipe(
      debounceTime(500),
      pluck('target', 'value'),
      distinctUntilChanged(),
      filter((value: string) => value.length > 3),
      map((value) => value)
    )
    .subscribe(value => {
      this.search.emit(value);
    });
  }

  ngOnInit() {
  }

  toggleSeetings() {
    console.log(this.settingsShown);
    this.settingsShown = !this.settingsShown;
  }

  toggleShowResults = (value: boolean) => {
    console.log(value);
  }

}
