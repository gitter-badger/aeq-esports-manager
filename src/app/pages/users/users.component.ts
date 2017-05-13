import { Component, OnInit } from "@angular/core";
import { TdMediaService } from "@covalent/core";

@Component({
  selector: 'aem-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(public media: TdMediaService) {
  }

  ngOnInit() {
    this.media.broadcast()
  }

}
