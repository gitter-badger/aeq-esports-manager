import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'aem-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input() game: String = 'Test2';

  constructor() {
  }

  ngOnInit() {

  }


}
