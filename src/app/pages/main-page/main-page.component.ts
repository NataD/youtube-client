import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  searchItemsShown: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  searchItems = () => {
    return this.searchItemsShown = !this.searchItemsShown;
  }
}
