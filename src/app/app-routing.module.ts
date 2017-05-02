import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LoginComponent } from "./pages/login/login.component";
import { LoginModule } from "./pages/login/login.module";

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '**', redirectTo: '/login'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule,
        LoginModule
    ],
    providers: []
})
export class AppRoutingModule {
}