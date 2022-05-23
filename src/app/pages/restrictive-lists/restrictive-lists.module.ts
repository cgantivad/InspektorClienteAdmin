import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestrictiveListsComponent } from './restrictive-lists.component';
import { RestrictiveListsRoutingModule, routedComponents } from './restrictive-lists-routing.module';
import { TypelistsComponent } from './components/typelists/typelists.component';
import { ConsultlistComponent } from './components/consultlist/consultlist.component';
import { ExportbaseComponent } from './components/exportbase/exportbase.component';
import { StatisticslistComponent } from './components/statisticslist/statisticslist.component';

const components = [
  RestrictiveListsComponent,
  TypelistsComponent,
  ConsultlistComponent,
  ExportbaseComponent,
  StatisticslistComponent
];

@NgModule({
  imports: [
    RestrictiveListsRoutingModule,
    CommonModule,
  ],
  declarations: [...routedComponents,components]
})
export class RestrictiveListsModule { }
