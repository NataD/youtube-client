import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
// import { SearchItemComponent } from './components/search-item/search-item.component';
// import { SearchResultsComponent } from './components/search-results/search-results.component';
// import { FilterComponent } from './components/filter/filter.component';
import { LoginHeaderComponent } from './components/header/login-header/login-header.component';
// import { SearchItemComponent } from './components/search-item/search-item.component';
// import { SearchResultsComponent } from './components/search-results/search-results.component';
// import { ItemBorderColorDirective } from './directives/item-border-color.directive';
// import { LoginComponent } from './auth/pages/login/login.component';
// import { FilterPipe } from './pipes/filter/filter.pipe';
// import { SortByPipe } from './pipes/sort/sort-by.pipe';
// import { authBackendProvider } from './helpers/mock-backend-auth';
// import { JwtInterceptor } from './helpers/jwt.interceptor';
// import { ErrorInterceptor } from './helpers/error.interceptor';
import { NotFoundComponent } from './pages/maintanence/not-found/not-found.component';
// import { DetailsPageComponent } from './pages/details-page/details-page.component';
// import { FormatDatePipe } from './pipes/format-date.pipe';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    // SearchItemComponent,
    // SearchResultsComponent,
    // LoginComponent,
    // ItemBorderColorDirective,
    // FilterPipe,
    // SortByPipe,
    HeaderComponent,
    LoginHeaderComponent,
    // FilterComponent,
    NotFoundComponent,
    // DetailsPageComponent,
    // FormatDatePipe
  ],
  exports: [
    HeaderComponent,
    LoginHeaderComponent,
    // FilterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AuthModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    //  // provider used to create fake backend
    //  authBackendProvider
  ],
  // bootstrap: [AppComponent]
})
export class CoreModule { }
