import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { ConsultsReportsComponent } from './components/consults-reports/consults-reports.component';
import { HistoricalReportsComponent } from './components/historical-reports/historical-reports.component';

const routes: Routes = [{
    path: '',
    component: ReportsComponent,
    children: [
    {
        path: 'consult-report',
        component: ConsultsReportsComponent,
    },
    {
        path: 'historical-report',
        component: HistoricalReportsComponent,
    }
  ],
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class  ReportsRoutingModule { }
  
  export const routedComponents = [
   ReportsComponent,
   ConsultsReportsComponent,
   HistoricalReportsComponent
      
  ];
  