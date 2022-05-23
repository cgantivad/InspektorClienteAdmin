import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsFiguresComponent } from './reports-figures.component';
import { InspektornewsComponent } from './components/inspektornews/inspektornews.component';
import { InspektorupdateComponent } from './components/inspektorupdate/inspektorupdate.component';
import { TotalscustomersComponent } from './components/totalscustomers/totalscustomers.component';
import { TotalsComponent } from './components/totals/totals.component';

const routes: Routes = [{
    path: '',
    component: ReportsFiguresComponent,
    children: [
                {
                    path: 'inspektor-news',
                    component: InspektornewsComponent,
                },
                {
                    path: 'inspektor-update',
                    component: InspektorupdateComponent,
                },
                {
                  path: 'totals-customers',
                  component: TotalscustomersComponent,
                },
                {
                  path: 'totals',
                  component: TotalsComponent,
                },

              ],
  }];
  

     
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class  ReportsFiguresRoutingModule { }
  
  export const routedComponents = [
    InspektornewsComponent,
    InspektorupdateComponent,
    TotalscustomersComponent,
    TotalsComponent
      
  ];
  