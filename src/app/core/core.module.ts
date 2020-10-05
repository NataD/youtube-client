import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { customCardReducer } from './custom-card.reducers';
import { HeaderComponent } from './components/header/header.component';
import { LoginHeaderComponent } from './components/header/login-header/login-header.component';
import { NotFoundComponent } from './pages/maintanence/not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginHeaderComponent,
    NotFoundComponent,
    AdminComponent,
  ],
  exports: [
    HeaderComponent,
    LoginHeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AuthModule,
    StoreModule.forRoot({ customCard: customCardReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
})
export class CoreModule { }
