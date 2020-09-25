import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { FilterComponent } from './components/filter/filter.component';
import { LoginHeaderComponent } from './components/header/login-header/login-header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginComponent } from './auth/login/login.component';
import { ItemBorderColorDirective } from './item-border-color.directive';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { SortByPipe } from './sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchItemComponent,
    SearchResultsComponent,
    FilterComponent,
    LoginHeaderComponent,
    MainPageComponent,
    LoginComponent,
    ItemBorderColorDirective,
    FilterPipe,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
