import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { ReportsRoutingModule, routedComponents } from './reports-routing.module';
import { GetLogComponent } from './components/get-log/get-log.component';
import { HistoricalQueryComponent } from './components/historical-query/historical-query.component';
import { ListsUpdateCertificationComponent } from './components/lists-update-certification/lists-update-certification.component';
import { MatchesDetailsComponent } from './components/matches-details/matches-details.component';
import { QueriesAndMatchesComponent } from './components/queries-and-matches/queries-and-matches.component';
import { QueriesByThirdPartyComponent } from './components/queries-by-third-party/queries-by-third-party.component';
import { QueriesMadeComponent } from './components/queries-made/queries-made.component';

const components=[
  ReportsComponent,
  GetLogComponent,
  HistoricalQueryComponent,
  ListsUpdateCertificationComponent,
  MatchesDetailsComponent,
  QueriesAndMatchesComponent,
  QueriesByThirdPartyComponent,
  QueriesMadeComponent
]
@NgModule({
  imports: [
    ReportsRoutingModule,
    CommonModule
  ],
  declarations: [...routedComponents,components]
})
export class ReportsModule { }
