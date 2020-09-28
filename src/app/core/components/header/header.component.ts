import { Component, OnInit, Input } from '@angular/core';
import { ShowResultsService } from '../../services/show-results/show-results.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  resultsShown: boolean = false;
  settingsShown: boolean = false;

  constructor(private showResultsService: ShowResultsService) { }

  ngOnInit() {
  }

  toggleSeetings() {
    console.log(this.settingsShown);
    this.settingsShown = !this.settingsShown;
  }

  toggleShowResults = (value: boolean) => {
    this.showResultsService.showResults.next(value);
  }
}
