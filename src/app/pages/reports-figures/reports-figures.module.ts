import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsFiguresComponent } from './reports-figures.component';
import { InspektornewsComponent } from './components/inspektornews/inspektornews.component';
import { InspektorupdateComponent } from './components/inspektorupdate/inspektorupdate.component';
import { TotalscustomersComponent } from './components/totalscustomers/totalscustomers.component';
import { TotalsComponent } from './components/totals/totals.component';
import { ReportsFiguresRoutingModule, routedComponents } from './reports-figures-routing.module';

const components=[
  ReportsFiguresComponent,
  InspektornewsComponent,
  InspektorupdateComponent,
  TotalscustomersComponent,
  TotalsComponent

]
@NgModule({
  imports: [
    ReportsFiguresRoutingModule,
    CommonModule
  ],
  declarations: [...routedComponents,components]
})
export class ReportsFiguresModule { }
