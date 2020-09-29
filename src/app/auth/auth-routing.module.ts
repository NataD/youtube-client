import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

// export const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
