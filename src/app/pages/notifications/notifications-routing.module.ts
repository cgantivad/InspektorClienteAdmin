import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonitoringComponent } from './components/monitoring/monitoring.component';
import { SentComponent } from './components/sent/sent.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotificationsComponent } from './notifications.component';

const routes: Routes = [{
    path: '',
    component: NotificationsComponent,
    children: [{
        path: 'settings',
        component: SettingsComponent,
    },
    {
        path: 'sent',
        component: SentComponent,
    },
    {
        path: 'monitoring',
        component: MonitoringComponent,
    }
  ],
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class  NotificationsRoutingModule { }
  
  export const routedComponents = [
   SettingsComponent,
   SentComponent,
   MonitoringComponent
      
  ];
  