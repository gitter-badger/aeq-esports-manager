import { AfterViewInit, Component, OnInit } from "@angular/core";
import { TdMediaService } from "@covalent/core";
import { TitleService } from "../../services/title.service";

@Component({
  selector: 'aem-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [TitleService]
})
export class UsersComponent implements OnInit, AfterViewInit {

  title: String = "";

  constructor(public media: TdMediaService,
              private _titleService: TitleService) {
  }

  ngOnInit() {
    this._titleService.titles.subscribe((title) => {
      this.title = title;
    });
  }

  ngAfterViewInit() {
    this.media.broadcast()
  }

}
