import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnListsComponent } from './own-lists.component';
import { TypeComponent } from './components/type/type.component';
import { LoadComponent } from './components/load/load.component';
import { ManageComponent } from './components/manage/manage.component';
import { OwnListsRoutingModule, routedComponents } from './own-lists-routing.module';

const components = [
  OwnListsComponent,
  TypeComponent,
  LoadComponent,
  ManageComponent];
@NgModule({
  imports: [
    OwnListsRoutingModule,
    CommonModule
  ],
  declarations: [...routedComponents,components]
})
export class OwnListsModule { }
