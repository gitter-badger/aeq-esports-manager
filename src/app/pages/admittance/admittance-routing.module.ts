import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdmittancesComponent } from "./admittances/admittances.component";
import { AdmittanceDetailComponent } from "./admittance-detail/admittance-detail.component";

const admittanceRoutes: Routes = [
  {
    path: 'admittances',
    component: AdmittancesComponent,
    children: [
      {
        path: ':id', component: AdmittanceDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(admittanceRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdmittanceRoutingModule {
}
