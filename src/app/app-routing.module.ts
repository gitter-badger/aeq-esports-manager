import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./pages/login/login.component";
import { LoginModule } from "./pages/login/login.module";
import { HomeComponent } from "./pages/home/home.component";
import { HomeModule } from "./pages/home/home.module";
import { UsersComponent } from "./pages/users/users.component";
import { UsersModule } from "./pages/users/users.module";
import { RegisterModule } from "./pages/register/register.module";
import { RegisterComponent } from "./pages/register/register.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
    LoginModule,
    HomeModule,
    UsersModule,
    RegisterModule
  ],
  providers: []
})
export class AppRoutingModule {
}
