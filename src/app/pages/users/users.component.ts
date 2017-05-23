import { AfterViewInit, Component } from "@angular/core";
import { TdMediaService } from "@covalent/core";

@Component({
  selector: 'aem-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit {

  title: String = "";

  constructor(public media: TdMediaService) {
  }

  ngAfterViewInit() {
    this.media.broadcast()
  }

  setTitle(title: String) {
    this.title = title;
  }

}
