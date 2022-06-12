import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListTypesComponent} from './list-types/list-types.component';
import {RestrictiveListsComponent} from './restrictive-lists.component';
import {RestrictiveListsRoutingModule} from './restrictive-lists-routing.module';
import {ListTypeFormComponent} from './list-types/list-type-form/list-type-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    NbButtonModule,
    NbCardModule, NbCheckboxModule, NbDatepickerModule,
    NbDialogService,
    NbFormFieldModule,
    NbIconModule,
    NbInputModule,
    NbOptionModule,
    NbSelectModule,
} from '@nebular/theme';
import {ComponentsModule} from '../../@components/components.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {CustomHttpService} from '../../utils/custom-http.service';
import {ManageRecordsComponent} from './manage-records/manage-records.component';
import {ManageRecordsFormComponent} from './manage-records/manage-records-form/manage-records-form.component';
import {ManageListsComponent} from './manage-lists/manage-lists.component';
import {ValidationRecordsComponent} from './validation-records/validation-records.component';
import {ListGroupService} from './backend/common/services/list-group.service';
import {ListGroupApi} from './backend/common/api/list-group.api';
import {ColorSmartTableCellComponent} from '../../custom-components/smart-table-components/color-smart-table-cell/color-smart-table-cell.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { ListGroupFormComponent } from './list-group/list-group-form/list-group-form.component';
import {ListTypeService} from './backend/common/services/list-type.service';
import {ListTypeApi} from './backend/common/api/list-type.api';
import {ListApi} from './backend/common/api/list.api';
import {ListService} from './backend/common/services/list.service';
import {ListValidationApi} from './backend/common/api/list-validation.api';
import {ListValidationService} from './backend/common/services/list-validation.service';
import {CheckboxSmartTableCellComponent} from '../../custom-components/smart-table-components/checkbox-smart-table-cell/checkbox-smart-table-cell.component';

@NgModule({
    declarations: [
        ListTypesComponent,
        RestrictiveListsComponent,
        ListTypeFormComponent,
        ListGroupComponent,
        ListGroupFormComponent,
        ManageRecordsComponent,
        ManageRecordsFormComponent,
        ManageListsComponent,
        ValidationRecordsComponent,
        ColorSmartTableCellComponent,
        CheckboxSmartTableCellComponent,
        ListGroupComponent,
        ListGroupFormComponent,
    ],
    imports: [
        CommonModule,
        RestrictiveListsRoutingModule,
        ReactiveFormsModule,
        NbInputModule,
        ComponentsModule,
        NbCardModule,
        NbButtonModule,
        NbFormFieldModule,
        FormsModule,
        NbIconModule,
        Ng2SmartTableModule,
        NbOptionModule,
        NbSelectModule,
        NbCheckboxModule,
        NbDatepickerModule,
    ],
    providers: [
        CustomHttpService,
        NbDialogService,
        ListGroupApi,
        ListGroupService,
        ListTypeApi,
        ListTypeService,
        ListApi,
        ListService,
        ListValidationApi,
        ListValidationService,
    ],
})

export class RestrictiveListsModule {
}
