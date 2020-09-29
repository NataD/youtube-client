import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: ':id',
    component: DetailsPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {
}
