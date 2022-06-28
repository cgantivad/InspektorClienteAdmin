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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  NbAccordionModule,
    NbButtonModule,
    NbCardModule,
    NbFormFieldModule,
    NbIconModule,
    NbInputModule,
    NbSelectModule,
    NbToggleModule,
    NbTreeGridModule
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { ComponentsModule } from '../../@components/components.module';
import { UserscompanyComponent } from './components/userscompany/userscompany.component';



const components = [
  ManageComponent,
  AddCompanyComponent,
  PlansComponent,
  ProcuraduriaComponent,
  ListpepsComponent,
  NamesdocumentsComponent,
  ContentsComponent,
  EntitiesComponent,  
  UserscompanyComponent
  
];

@NgModule({
  imports: [
    ManageRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    NbCardModule,
    ComponentsModule,
    NbInputModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NbFormFieldModule,
    NbIconModule,
    NbTreeGridModule,
    FormsModule,
    ThemeModule,
    NbSelectModule,
    NbToggleModule,
    NbAccordionModule 
  ],
  declarations: [...routedComponents,components]
})
export class ManageModule { }
