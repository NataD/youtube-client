import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotFoundComponent } from './maintanence/not-found/not-found.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { AuthGuard } from './helpers/auth.guard';
const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent,
  },
  {
    path: 'client',
    // loadChildren: './panel/panel.module#PanelModule',
    component: MainPageComponent,
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
