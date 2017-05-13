import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";
import { CovalentLayoutModule } from "@covalent/core";
import { MdButtonModule, MdIconModule, MdListModule, MdToolbarModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CovalentLayoutModule,
    MdToolbarModule,
    MdIconModule,
    MdListModule,
    MdButtonModule
  ],
  declarations: [UsersComponent],
  exports: [UsersComponent]
})
export class UsersModule {
}
