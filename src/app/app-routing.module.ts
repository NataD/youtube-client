import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './auth/pages/login/login.component';
// import { MainPageComponent } from './youtube/pages/main-page/main-page.component';
import { NotFoundComponent } from './core/pages/maintanence/not-found/not-found.component';
// import { DetailsPageComponent } from './youtube/pages/details-page/details-page.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    // component: LoginComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'client',
    // component: MainPageComponent,
    // loadChildren: './youtube/youtube.module#YoutubeModule',
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
    canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    // canLoad: [AuthGuard],
  },
  // {
  //   path: 'details/:id',
  //   // loadChildren: './panel/panel.module#PanelModule',
  //   component: DetailsPageComponent,
  //   canActivate: [AuthGuard],
  //   canActivateChild: [AuthGuard],
  //   canLoad: [AuthGuard],
  // },
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
