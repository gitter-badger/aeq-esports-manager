import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'users',
        loadChildren: './pages/users/users.module#UsersModule'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', redirectTo: '/login'}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
