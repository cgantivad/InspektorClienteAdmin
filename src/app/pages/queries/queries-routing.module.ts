import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BulkComponent } from './components/bulk/bulk.component';
import { IndividualComponent } from './components/individual/individual.component';
import { QueriesComponent } from './queries.component';


const routes: Routes = [{
    path: '',
    component: QueriesComponent,
    children: [{
        path: 'individual',
        component: IndividualComponent,
    },
    {
        path: 'bulk',
        component: BulkComponent,
    }
   
  ],
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class  QueriesRoutingModule { }
  
  export const routedComponents = [
   QueriesComponent,
   IndividualComponent,
   BulkComponent

      
  ];
  