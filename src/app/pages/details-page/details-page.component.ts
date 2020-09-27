import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Observable, of, Subscription } from "rxjs";
import { catchError, map } from "rxjs/operators";
import mockedData from "../../components/search-results/mocked-data";
import { SearchItem } from "../../models/search-item.model";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  private searchItem$: Observable<any>;
  private itemId: Subscription;
  private id: string;
  private itemPhoto: string;
  public publicationDate: string = '';

  constructor(
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.itemId = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.id = params['id'];
    });


    this.searchItem$ = of(mockedData).pipe(
      map(resp => {
        console.log(resp);
        console.log(SearchItem.fromRaw(resp));
        console.log('this.id', this.id);
        const selectedItem = resp.items.find((item: any) => {
          return item.id === this.id;
        });
        console.log(selectedItem);
        this.publicationDate = selectedItem.snippet.publishedAt;
        this.itemPhoto = selectedItem.snippet.thumbnails.high.url;
        return SearchItem.fromRaw(selectedItem);
      }),
      catchError((err: any) => {
        // this.router.navigate(['invalid-url']);
        this.cd.detectChanges();
        return of(err);
      }),
    );
  }

  ngOnDestroy() {
   this.itemId.unsubscribe();
 }

 goBack = () => {
   console.log('Go back');
   this.location.back();
 }
}
