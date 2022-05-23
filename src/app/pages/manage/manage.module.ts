import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { ManageRoutingModule, routedComponents } from './manage-routing.module';
import { AddCompanyComponent } from './components/addCompany/addCompany.component';
import { PlansComponent } from './components/plans/plans.component';
import { ProcuraduriaComponent } from './components/procuraduria/procuraduria.component';
import { ListpepsComponent } from './components/listpeps/listpeps.component';
import { NamesdocumentsComponent } from './components/namesdocuments/namesdocuments.component';
import { ContentsComponent } from './components/contents/contents.component';
import { EntitiesComponent } from './components/entities/entities.component';


const components = [
  ManageComponent,
  AddCompanyComponent,
  PlansComponent,
  ProcuraduriaComponent,
  ListpepsComponent,
  NamesdocumentsComponent,
  ContentsComponent,
  EntitiesComponent
];

@NgModule({
  imports: [
    ManageRoutingModule,
    CommonModule,
  ],
  declarations: [...routedComponents,components]
})
export class ManageModule { }
