import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CovalentLayoutModule } from '@covalent/core';
import { MdButtonModule, MdIconModule } from "@angular/material";
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CovalentLayoutModule,
        MdButtonModule,
        MdIconModule
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule {
}
