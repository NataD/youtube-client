import { Component, OnInit, Input } from '@angular/core';
import {SearchItem} from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() searchItem: SearchItem;
  public publicationDate: string = '';

  constructor() { }

  ngOnInit() {
    this.publicationDate = this.searchItem.snippet.publishedAt;
  }
}
