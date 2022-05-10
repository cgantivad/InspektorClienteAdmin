import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadComponent } from './components/load/load.component';
import { ManageComponent } from './components/manage/manage.component';
import { TypeComponent } from './components/type/type.component';
import { OwnListsComponent } from './own-lists.component';


const routes: Routes = [{
    path: '',
    component: OwnListsComponent,
    children: [{
        path: 'type',
        component: TypeComponent,
    },
    {
        path: 'load',
        component: LoadComponent,
    },
    {
        path: 'manage',
        component: ManageComponent,
    }
  ],
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class  OwnListsRoutingModule { }
  
  export const routedComponents = [
   OwnListsComponent,
   TypeComponent,
   LoadComponent,
   ManageComponent
      
  ];
  