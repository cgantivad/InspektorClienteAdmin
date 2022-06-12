import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';

@Component({
  selector: 'ngx-checkbox-smart-table-cell',
  templateUrl: './checkbox-smart-table-cell.component.html',
  styleUrls: ['./checkbox-smart-table-cell.component.scss'],
})
export class CheckboxSmartTableCellComponent implements OnInit, ViewCell {

  renderValue: boolean;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit(): void {
    this.renderValue = JSON.parse(this.value.toString());
  }

}
