import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users.component";
import { AdmittancesComponent } from "../admittances/admittances.component";
import { AdmittanceDetailComponent } from "../admittances/admittance-detail/admittance-detail.component";

const usersRoutes: Routes = [
  {
    path: '', component: UsersComponent,
    children: [
      {
        path: 'admittances', component: AdmittancesComponent,
        children: [
          {
            path: ':id', component: AdmittanceDetailComponent
          }
        ]
      }
    ]
  }
];

export const usersRouting: ModuleWithProviders = RouterModule.forChild(usersRoutes);
