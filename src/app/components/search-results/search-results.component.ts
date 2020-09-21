import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {catchError, filter, map, switchMap, tap} from "rxjs/operators";
import mockedData from "./mocked-data.ts";
import {SearchResults} from "../../search-results.model";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  searchItems$: Observable<any>;
  constructor(
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.searchItems$ = of(mockedData).pipe(
      // filter(appointment => !isNullOrUndefined(appointment)),
      // switchMap((appointment: Appointment) => {
      //   this.appointmentDescription = appointment.description;
      //   this.workOrderKey = appointment.workOrderKey;
      //   this.expirationSubject.next(appointment.expireAt);
      //   this.estimatedDuration = appointment.estimatedDuration;
      //   this.workOrderKeyHash = appointment.workOrderKeyHash;
      //   return this.crudService.getAppointmentList(appointment.workOrderKey);
      // }),
      map(resp => {
        console.log('-=-=-=-=-', resp);
        return SearchResults.fromRaw(resp);
        // this.showLoaderSubject.next(false);
        // return AppointmentList.fromRaw(resp)
      }),
      catchError((err: any) => {
        // this.router.navigate(['invalid-url']);
        this.cd.detectChanges();
        return of(err);
      }),
    );
  }

}
