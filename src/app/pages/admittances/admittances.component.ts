import { AfterViewInit, Component } from "@angular/core";
import { ITdDataTableColumn, TdMediaService } from "@covalent/core";

@Component({
  selector: 'aem-admittances',
  templateUrl: './admittances.component.html',
  styleUrls: ['./admittances.component.scss']
})
export class AdmittancesComponent implements AfterViewInit {

  private data: any[] = [
    {sku: '1452-2', item: 'Pork Chops', price: 32.11},
    {sku: '1421-0', item: 'Prime Rib', price: 41.15},
  ];
  private columns: ITdDataTableColumn[] = [
    {name: 'sku', label: 'SKU #', tooltip: 'Stock Keeping Unit', sortable: true},
    {name: 'item', label: 'Item name'},
    {name: 'price', label: 'Price (US$)', numeric: true, format: v => v.toFixed(2)},
  ];

  constructor(public media: TdMediaService) {

  }

  ngAfterViewInit() {
    this.media.broadcast();
  }

}
