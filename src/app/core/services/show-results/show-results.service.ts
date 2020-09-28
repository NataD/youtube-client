import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowResultsService {
  showResults: Subject<boolean> = new Subject<boolean>();

  constructor() { }
}
