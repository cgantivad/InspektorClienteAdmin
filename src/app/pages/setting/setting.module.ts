import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { routedComponents, SettingRoutingModule } from './setting-routing.module';
import { AdduserComponent } from './components/adduser/adduser.component';
import { GetuserComponent } from './components/getuser/getuser.component';
import { ThirdpartymanageComponent } from './components/thirdpartymanage/thirdpartymanage.component'; 
import { CompanytypelistComponent } from './components/companytypelist/companytypelist.component';
import { ManageprocuracyComponent } from './components/manageprocuracy/manageprocuracy.component';
import { CompanylogoComponent } from './components/companylogo/companylogo.component';


const components = [
  SettingComponent,
  AdduserComponent,
  GetuserComponent,
  ThirdpartymanageComponent,
  CompanytypelistComponent,
  ManageprocuracyComponent,  
  CompanytypelistComponent,
  CompanylogoComponent

];

@NgModule({
  imports: [
    SettingRoutingModule,
    CommonModule
  ],
  declarations: [...routedComponents,components]
})
export class SettingModule { }
