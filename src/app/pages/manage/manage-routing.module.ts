
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageComponent } from './manage.component';
import { AddCompanyComponent } from './components/addCompany/addCompany.component';
import { PlansComponent } from './components/plans/plans.component';
import { ProcuraduriaComponent } from './components/procuraduria/procuraduria.component';
import { AdditionalservicesComponent } from './components/additionalservices/additionalservices.component';
import { ListpepsComponent } from './components/listpeps/listpeps.component';
import { NamesdocumentsComponent } from './components/namesdocuments/namesdocuments.component';
import { ContentsComponent } from './components/contents/contents.component';
import { EntitiesComponent } from './components/entities/entities.component';

const routes: Routes = [{
  path: '',
  component: ManageComponent,
  children: [{
              path: 'addcompany',
              component: AddCompanyComponent,
            }, 
            {
              path: 'plans',
              component: PlansComponent,
            }, 
            {
              path: 'procuraduria',
              component: ProcuraduriaComponent,
            },
            {
              path: 'entities',
              component: EntitiesComponent,
            }, 
            {
              path: 'additional-services',
              component: AdditionalservicesComponent,
            },
            {
              path: 'list-pep',
              component: ListpepsComponent,
            },
            {
              path: 'names-documents',
              component: NamesdocumentsComponent,
            },
            {
              path: 'contents',
              component: ContentsComponent,
            }
          ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ManageRoutingModule { }

export const routedComponents = [
    AddCompanyComponent,
    PlansComponent,
    ProcuraduriaComponent,
    ListpepsComponent,
    NamesdocumentsComponent,
    ContentsComponent,
    EntitiesComponent
];
