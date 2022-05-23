import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationsComponent } from './consultations.component';
import { ConsultationsRoutingModule, routedComponents } from './consultations-routing.module';
import { ShowconsultComponent } from './components/showconsult/showconsult.component';

const components = [
  ConsultationsComponent,
  ShowconsultComponent
  ];
  
  @NgModule({
    imports: [
      ConsultationsRoutingModule,
      CommonModule,
    ],
    declarations: [...routedComponents,components]
  })
export class ConsultationsModule { }
