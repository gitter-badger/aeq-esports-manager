import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CovalentLayoutModule } from "@covalent/core";
import { MdButtonModule, MdCardModule, MdIconModule, MdListModule, MdToolbarModule } from "@angular/material";
import { AdmittancesComponent } from "./admittances/admittances.component";
import { AdmittanceDetailComponent } from "./admittance-detail/admittance-detail.component";
import { AdmittanceRoutingModule } from "./admittance-routing.module";

@NgModule({
  imports: [
    CommonModule,
    CovalentLayoutModule,
    MdToolbarModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    AdmittanceRoutingModule
  ],
  declarations: [
    AdmittancesComponent,
    AdmittanceDetailComponent
  ]
})
export class AdmittanceModule {
}
