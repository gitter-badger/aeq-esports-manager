import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { StepState } from "@covalent/core";

@Component({
  selector: 'aem-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  stepState1 = StepState.None;

  constructor() {
  }

  ngOnInit() {
  }

  toggleStep1() {
    this.stepState1 = StepState.Complete;
  }

}
