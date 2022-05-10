import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetLogComponent } from './components/get-log/get-log.component';
import { HistoricalQueryComponent } from './components/historical-query/historical-query.component';
import { ListsUpdateCertificationComponent } from './components/lists-update-certification/lists-update-certification.component';
import { MatchesDetailsComponent } from './components/matches-details/matches-details.component';
import { QueriesAndMatchesComponent } from './components/queries-and-matches/queries-and-matches.component';
import { QueriesByThirdPartyComponent } from './components/queries-by-third-party/queries-by-third-party.component';
import { QueriesMadeComponent } from './components/queries-made/queries-made.component';
import { ReportsComponent } from './reports.component';

const routes: Routes = [{
    path: '',
    component: ReportsComponent,
    children: [{
        path: 'queries-and-matches',
        component: QueriesAndMatchesComponent,
    },
    {
        path: 'get-log',
        component: GetLogComponent,
    },
    {
        path: 'historical-query',
        component: HistoricalQueryComponent,
    }
    ,
    {
        path: 'matches-details',
        component: MatchesDetailsComponent,
    }
    ,
    {
        path: 'lists-update-certification',
        component: ListsUpdateCertificationComponent,
    },
    {
        path: 'queries-by-third-party',
        component: QueriesByThirdPartyComponent,
    },
    {
        path: 'queries-made',
        component: QueriesMadeComponent,
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
   GetLogComponent,
   HistoricalQueryComponent,
   ListsUpdateCertificationComponent,
   MatchesDetailsComponent,
   QueriesAndMatchesComponent,
   QueriesByThirdPartyComponent,
   QueriesMadeComponent
      
  ];
  