import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as dayjs from 'dayjs';
import { DefaultEditor, ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngx-smart-table-datepicker',
  templateUrl: './smart-table-datepicker.component.html',
  styleUrls: ['./smart-table-datepicker.component.scss']
})
export class SmartTableDatepickerComponent extends DefaultEditor implements OnInit {

  @Input() placeholder: string = 'Choose a Date/Time';

  @Input() min: Date; // Defaults to now(rounded down to the nearest 15 minute mark)

  @Input() max: Date; // Defaults to 1 month after the min


  formControl ;
  
  stringValue;
  inputModel: Date;

  constructor() {
    super();
  }

  ngOnInit() {    
    if(!this.min) {
      this.min = new Date();
      this.min.setMinutes(Math.floor(this.min.getMinutes() / 15) * 15 );
    }

    if(!this.max) {
      this.max = new Date(this.min);
      this.max.setFullYear(this.min.getFullYear() + 1);    }

    if(this.cell.newValue) {             
      this.formControl= new FormControl(dayjs(this.cell.newValue).format('YYYY-MM-DD'));    
    }
   }

  onChange(event:any) {
  if(event)
  {
      this.cell.newValue = event.toISOString();
  }
    
  }
}

@Component({
  template: `{{value }} `,
})
export class SmartTableDatepickerRenderComponent implements ViewCell, OnInit {
  @Input() value: string;
  @Input() rowData: any;

  constructor() { }

  ngOnInit() { }

}