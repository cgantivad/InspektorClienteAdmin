import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-log',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
