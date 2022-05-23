
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowconsultComponent } from './components/showconsult/showconsult.component';
import { ConsultationsComponent } from './consultations.component';


const routes: Routes = [{
  path: '',
  component: ConsultationsComponent,
  children: [
            {
              path: 'show',
              component: ShowconsultComponent,
            }
          ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ConsultationsRoutingModule { }

export const routedComponents = [
  ConsultationsComponent,
  ShowconsultComponent
];
