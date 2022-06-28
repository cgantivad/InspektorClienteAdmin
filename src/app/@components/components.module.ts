/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxValidationMessageComponent } from './validation-message/validation-message.component';
import {
  NgxFilterByNumberComponent,
} from './custom-smart-table-components/filter-by-number/filter-by-number.component';
import { NbDatepickerModule, NbInputModule } from '@nebular/theme';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from './editors/smart-table-datepicker/smart-table-datepicker.component';

const COMPONENTS = [
  NgxValidationMessageComponent,
  NgxFilterByNumberComponent,
  SmartTableDatepickerComponent,
  SmartTableDatepickerRenderComponent
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NbDatepickerModule,
    NbInputModule

  ],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
  entryComponents: [
    NgxFilterByNumberComponent,  
  ],
})
export class ComponentsModule {
}
