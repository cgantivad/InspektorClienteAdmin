import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotificationsRoutingModule, routedComponents } from './notifications-routing.module';
import { SentComponent } from './components/sent/sent.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';
const components = [
  NotificationsComponent,
  SettingsComponent,
  SentComponent,
  MonitoringComponent
  ];
@NgModule({
  imports: [
    NotificationsRoutingModule,
    CommonModule
  ],
  declarations: [...routedComponents,components]
})
export class NotificationsModule { }



