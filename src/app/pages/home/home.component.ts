import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { appConfig } from "../../config/app.config";

@Component({
  selector: 'aem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  version: String = appConfig.version;

  constructor() {

  }

  ngOnInit() {
  }

}
