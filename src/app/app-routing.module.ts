import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LoginComponent } from "./pages/login/login.component";
import { LoginModule } from "./pages/login/login.module";
import { HomeComponent } from "./pages/home/home.component";
import { HomeModule } from "./pages/home/home.module";

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
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
        HomeModule
    ],
    providers: []
})
export class AppRoutingModule {
}