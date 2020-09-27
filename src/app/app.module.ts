import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { FilterComponent } from './components/filter/filter.component';
import { LoginHeaderComponent } from './components/header/login-header/login-header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ItemBorderColorDirective } from './directives/item-border-color.directive';
import { LoginComponent } from './auth/login/login.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SortByPipe } from './pipes/sort/sort-by.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { authBackendProvider } from './helpers/mock-backend-auth';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { NotFoundComponent } from './maintanence/not-found/not-found.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { FormatDatePipe } from './pipes/format-date.pipe';

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
    SortByPipe,
    NotFoundComponent,
    DetailsPageComponent,
    FormatDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
       { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

       // provider used to create fake backend
       authBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
