import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { routedComponents, SettingRoutingModule } from './setting-routing.module';
import { AdduserComponent } from './components/adduser/adduser.component';
import { GetuserComponent } from './components/getuser/getuser.component';

import { ChangepwdComponent } from './components/changepwd/changepwd.component';


const components = [
  SettingComponent,
  AdduserComponent,
  GetuserComponent,
  ChangepwdComponent

];

@NgModule({
  imports: [
    SettingRoutingModule,
    CommonModule
  ],
  declarations: [...routedComponents,components]
})
export class SettingModule { }
