import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { ReportsRoutingModule, routedComponents } from './reports-routing.module';
import { ConsultsReportsComponent } from './components/consults-reports/consults-reports.component';
import { HistoricalReportsComponent } from './components/historical-reports/historical-reports.component';


const components=[
  ReportsComponent,
  ConsultsReportsComponent,
  HistoricalReportsComponent

]
@NgModule({
  imports: [
    ReportsRoutingModule,
    CommonModule
  ],
  declarations: [...routedComponents,components]
})
export class ReportsModule { }
