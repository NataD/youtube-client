import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterListenersService {

  filterInputChange: Subject<string> = new Subject<string>();

  sortResultsBy: Subject<string> = new Subject<string>();
  
  ascendingOrder: Subject<boolean> = new Subject<boolean>();

  constructor() { }
}
