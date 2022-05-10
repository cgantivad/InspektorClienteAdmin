
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { CompanytypelistComponent } from './components/companytypelist/companytypelist.component';
import { GetuserComponent } from './components/getuser/getuser.component';
import { ThirdpartymanageComponent } from './components/thirdpartymanage/thirdpartymanage.component';
import { ManageprocuracyComponent } from './components/manageprocuracy/manageprocuracy.component';
import { SettingComponent } from './setting.component';
import { CompanylogoComponent } from './components/companylogo/companylogo.component';


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
    path: 'thirdpartymanage',
    component: ThirdpartymanageComponent,
  }
  , {
    path: 'companytypelist',
    component: CompanytypelistComponent,
  }, {
    path: 'manageprocuracy',
    component: ManageprocuracyComponent,
  }, {
    path: 'companylogo',
    component: CompanylogoComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule { }

export const routedComponents = [
    AdduserComponent,
    GetuserComponent,
    ThirdpartymanageComponent,
    CompanytypelistComponent,
    ManageprocuracyComponent,
    CompanylogoComponent,
    SettingComponent,
    
];
