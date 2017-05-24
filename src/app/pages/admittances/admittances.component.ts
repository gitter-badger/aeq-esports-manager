import { AfterViewInit, Component, OnInit } from "@angular/core";
import { ITdDataTableColumn, TdMediaService } from "@covalent/core";
import { TitleService } from "../../services/title.service";

@Component({
  selector: 'aem-admittances',
  templateUrl: './admittances.component.html',
  styleUrls: ['./admittances.component.scss']
})
export class AdmittancesComponent implements OnInit, AfterViewInit {

  private data: any[] = [
    {sku: '1452-2', item: 'Pork Chops', price: 32.11},
    {sku: '1421-0', item: 'Prime Rib', price: 41.15},
  ];
  private columns: ITdDataTableColumn[] = [
    {name: 'sku', label: 'SKU #', tooltip: 'Stock Keeping Unit', sortable: true},
    {name: 'item', label: 'Item name'},
    {name: 'price', label: 'Price (US$)', numeric: true, format: v => v.toFixed(2)},
  ];

  constructor(public media: TdMediaService,
              private _titleSerivce: TitleService) {

  }

  ngOnInit() {
    this._titleSerivce.setTitle('Bewerbungen')
  }

  ngAfterViewInit() {
    this.media.broadcast();
  }

}
