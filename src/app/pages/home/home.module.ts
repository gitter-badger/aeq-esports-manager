import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CovalentLayoutModule } from '@covalent/core';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CovalentLayoutModule
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule {
}
