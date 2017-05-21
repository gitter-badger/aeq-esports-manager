import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./pages/login/login.component";
import { LoginModule } from "./pages/login/login.module";
import { HomeComponent } from "./pages/home/home.component";
import { HomeModule } from "./pages/home/home.module";
import { UsersComponent } from "./pages/users/users.component";
import { UsersModule } from "./pages/users/users.module";
import { AdmittanceModule } from "./pages/admittances/admittance.module";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    LoginModule,
    HomeModule,
    UsersModule,
    AdmittanceModule
  ],
  providers: []
})
export class AppRoutingModule {
}
