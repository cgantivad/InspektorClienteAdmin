import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from './log.component';
import { LogRoutingModule, routedComponents } from './log-routing.module';
import { ConsultlogComponent } from './components/consultlog/consultlog.component';

const components = [
LogComponent,
ConsultlogComponent
];

@NgModule({
  imports: [
    LogRoutingModule,
    CommonModule,
  ],
  declarations: [...routedComponents,components]
})
export class LogModule { }
