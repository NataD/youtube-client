import { Component, OnInit, Input } from '@angular/core';
import {SearchItem} from '../../models/search-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() searchItem: SearchItem;
  public publicationDate: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.publicationDate = this.searchItem.snippet.publishedAt;
  }

  redirectToDetails = (id: string) => {
    this.router.navigate([`/client/${id}`]);
  }
}
