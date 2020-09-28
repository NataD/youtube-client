import { CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
// import { MainPageComponent } from './pages/main-page/main-page.component';
// import { ItemBorderColorDirective } from '../directives/item-border-color.directive';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { SortByPipe } from './pipes/sort/sort-by.pipe';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
// import { FormatDatePipe } from '../pipes/format-date.pipe';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    // MainPageComponent,
    // ItemBorderColorDirective,
    FilterPipe,
    SortByPipe,
    DetailsPageComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    SharedModule,
    YoutubeRoutingModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class YoutubeModule { }
