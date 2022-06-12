import {Component, Input, OnInit, Output} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';

@Component({
  selector: 'ngx-color-smart-table-cell',
  templateUrl: './color-smart-table-cell.component.html',
  styleUrls: ['./color-smart-table-cell.component.scss'],
})
export class ColorSmartTableCellComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

}
