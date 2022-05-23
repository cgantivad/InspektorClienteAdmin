
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestrictiveListsComponent } from './restrictive-lists.component';
import { TypelistsComponent } from './components/typelists/typelists.component';
import { ConsultlistComponent } from './components/consultlist/consultlist.component';
import { ExportbaseComponent } from './components/exportbase/exportbase.component';
import { StatisticslistComponent } from './components/statisticslist/statisticslist.component';

const routes: Routes = [{
  path: '',
  component: RestrictiveListsComponent,
  children: [{
              path: 'type-lists',
              component: TypelistsComponent,
            }, 
            {
              path: 'consult-lists',
              component: ConsultlistComponent,
            }, 
            {
              path: 'export',
              component: ExportbaseComponent,
            },
            {
              path: 'statistics-lists',
              component: StatisticslistComponent,
            }
          ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class RestrictiveListsRoutingModule { }

export const routedComponents = [
  TypelistsComponent,
  ConsultlistComponent,
  ExportbaseComponent,
  StatisticslistComponent
];
