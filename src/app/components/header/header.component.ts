import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() searchItems: any;
  settingsShown: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSeetings() {
    console.log(this.settingsShown);
    this.settingsShown = !this.settingsShown;
  }
}
