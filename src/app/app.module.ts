import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import "hammerjs";

import { appRouting } from "./app.routes";
import { LoginModule } from "./pages/login/login.module";
import { AppComponent } from "./app.component";
import { FakeAuthService } from "./services/fake-auth.service";
import { MdListModule } from "@angular/material";
import { CovalentLayoutModule, TdMediaService } from "@covalent/core";
import { RouterModule } from "@angular/router";
import { HomeModule } from "./pages/home/home.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    LoginModule,
    HomeModule,
    MdListModule,
    CovalentLayoutModule,
    appRouting
  ],
  providers: [
    FakeAuthService,
    TdMediaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
