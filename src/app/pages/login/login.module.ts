import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { MdButtonModule, MdCardModule, MdInputModule, MdCheckboxModule, MdListModule } from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MdButtonModule,
        MdCardModule,
        MdInputModule,
        MdCheckboxModule,
        MdListModule
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule {
}
