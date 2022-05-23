import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListTypesComponent} from './list-types/list-types.component';
import {RestrictiveListsComponent} from './restrictive-lists.component';
import {RestrictiveListsRoutingModule} from "./restrictive-lists-routing.module";
import {ListTypeFormComponent} from './list-types/list-type-form/list-type-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
    NbButtonModule,
    NbCardModule, NbCheckboxModule,
    NbDialogService,
    NbFormFieldModule,
    NbIconModule,
    NbInputModule,
    NbOptionModule,
    NbSelectModule
} from "@nebular/theme";
import {ComponentsModule} from "../../@components/components.module";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {CustomHttpService} from "../../utils/custom-http.service";
import {GroupListsComponent} from './group-lists/group-lists.component';
import {GroupListsFormComponent} from './group-lists/group-lists-form/group-lists-form.component';
import { ManageRecordsComponent } from './manage-records/manage-records.component';
import { ManageRecordsFormComponent } from './manage-records/manage-records-form/manage-records-form.component';
import { ManageListsComponent } from './manage-lists/manage-lists.component';
import { ValidationRecordsComponent } from './validation-records/validation-records.component';


@NgModule({
    declarations: [
        ListTypesComponent,
        RestrictiveListsComponent,
        ListTypeFormComponent,
        GroupListsComponent,
        GroupListsFormComponent,
        ManageRecordsComponent,
        ManageRecordsFormComponent,
        ManageListsComponent,
        ValidationRecordsComponent,
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
        NbCheckboxModule
    ],
    providers: [
        CustomHttpService,
        NbDialogService,
    ],
})
export class RestrictiveListsModule {
}