import { Component, OnInit } from "@angular/core";
import { Admittance } from "../../../models/admittance";

@Component({
  selector: 'aem-admittance-detail',
  templateUrl: './admittance-detail.component.html',
  styleUrls: ['./admittance-detail.component.scss']
})
export class AdmittanceDetailComponent implements OnInit {

  item: Admittance = {user: 'Test', date: '13.05.2017', text: 'Bitte nehmt mich auf!'};

  constructor() {
  }

  ngOnInit() {
    // TODO
  }

}
