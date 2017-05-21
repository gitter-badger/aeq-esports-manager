import { AfterViewInit, Component } from "@angular/core";
import { TdMediaService } from "@covalent/core";

@Component({
  selector: 'aem-admittances',
  templateUrl: './admittances.component.html',
  styleUrls: ['./admittances.component.scss']
})
export class AdmittancesComponent implements AfterViewInit {

  constructor(public media: TdMediaService) {

  }

  ngAfterViewInit() {
    this.media.broadcast();
  }

}
