import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Observable, of, Subscription } from "rxjs";
import { catchError, map } from "rxjs/operators";
import mockedData from "../../components/search-results/mocked-data";
import { SearchItem } from "../../models/search-item.model";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  private searchItem$: Observable<any>;
  private searchItem: any;
  private itemId: Subscription;
  private id: string;
  private itemPhoto: string;
  public publicationDate: string = '';

  constructor(
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private location: Location,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.itemId = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.searchService.getVideoStatistics(this.id).subscribe(
        (response: any) => {
          const item = response.items[0];
          this.itemPhoto = item.snippet.thumbnails.high.url;
          return this.searchItem = item;
        }
      )
  }

  ngOnDestroy() {
   this.itemId.unsubscribe();
 }

 goBack = () => {
   console.log('Go back');
   this.location.back();
 }
}
