import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";
import { CovalentLayoutModule } from "@covalent/core";
import { MdButtonModule, MdIconModule, MdListModule, MdToolbarModule } from "@angular/material";
import { UserComponent } from "./user/user.component";
import { AdmittanceModule } from "../admittances/admittance.module";
import { usersRouting } from "./users.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CovalentLayoutModule,
    MdToolbarModule,
    MdIconModule,
    MdListModule,
    MdButtonModule,
    AdmittanceModule,
    usersRouting
  ],
  declarations: [UsersComponent, UserComponent],
  exports: [UsersComponent]
})
export class UsersModule {
}
