import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { RegisterComponent } from "./register.component";
import { CovalentLayoutModule, CovalentStepsModule } from "@covalent/core";
import { MdButtonModule, MdCardModule, MdInputModule } from "@angular/material";
import { GameCardComponent } from "./game-card/game-card.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    MdButtonModule,
    MdInputModule,
    MdCardModule
  ],
  declarations: [RegisterComponent, GameCardComponent],
  exports: [RegisterComponent]
})
export class RegisterModule {
}
