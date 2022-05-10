import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueriesComponent } from './queries.component';
import { IndividualComponent } from './components/individual/individual.component';
import { BulkComponent } from './components/bulk/bulk.component';
import { QueriesRoutingModule, routedComponents } from './queries-routing.module';


const components =[
  QueriesComponent,
  IndividualComponent,
  BulkComponent
]

@NgModule({
  imports: [
    QueriesRoutingModule,
    CommonModule
  ],
  declarations: [...routedComponents,components]
})
export class QueriesModule { }
