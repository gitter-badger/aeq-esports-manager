import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import "hammerjs";

import { AppRoutingModule } from "./app-routing.module";
import { LoginModule } from "./pages/login/login.module";
import { AppComponent } from "./app.component";
import { FakeAuthService } from "./services/fake-auth.service";
import { MdListModule } from "@angular/material";
import { CovalentLayoutModule, TdMediaService } from "@covalent/core";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    LoginModule,
    MdListModule,
    CovalentLayoutModule
  ],
  providers: [
    FakeAuthService,
    TdMediaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
