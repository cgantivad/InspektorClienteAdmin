
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdduserComponent } from './components/adduser/adduser.component';

import { GetuserComponent } from './components/getuser/getuser.component';

import { SettingComponent } from './setting.component';

import { ChangepwdComponent } from './components/changepwd/changepwd.component';


const routes: Routes = [{
  path: '',
  component: SettingComponent,
  children: [{
    path: 'adduser',
    component: AdduserComponent,
  }, {
    path: 'getuser',
    component: GetuserComponent,
  }
  , {
    path: 'changepwd',
    component: ChangepwdComponent,
  }
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule { }

export const routedComponents = [
    AdduserComponent,
    GetuserComponent,
    ChangepwdComponent
    
];
