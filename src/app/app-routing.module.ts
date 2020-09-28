import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { MainPageComponent } from './youtube/pages/main-page/main-page.component';
import { NotFoundComponent } from './core/pages/maintanence/not-found/not-found.component';
import { DetailsPageComponent } from './youtube/pages/details-page/details-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent,
  },
  {
    path: 'client',
    component: MainPageComponent,
    // loadChildren: './youtube/youtube.module#YoutubeModule',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'details/:id',
    // loadChildren: './panel/panel.module#PanelModule',
    component: DetailsPageComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
