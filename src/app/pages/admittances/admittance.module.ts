import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CovalentDataTableModule, CovalentLayoutModule } from "@covalent/core";
import { MdButtonModule, MdCardModule, MdIconModule, MdListModule, MdToolbarModule } from "@angular/material";
import { AdmittancesComponent } from "./admittances.component";
import { AdmittanceDetailComponent } from "./admittance-detail/admittance-detail.component";

@NgModule({
  imports: [
    CommonModule,
    CovalentLayoutModule,
    CovalentDataTableModule,
    MdToolbarModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdCardModule
  ],
  declarations: [
    AdmittancesComponent,
    AdmittanceDetailComponent
  ],
  exports: [
    AdmittancesComponent,
    AdmittanceDetailComponent
  ]
})
export class AdmittanceModule {
}
