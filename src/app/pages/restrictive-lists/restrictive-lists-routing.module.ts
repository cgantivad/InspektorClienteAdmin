import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RestrictiveListsComponent} from "./restrictive-lists.component";
import {ListTypesComponent} from "./list-types/list-types.component";
import {GroupListsComponent} from "./group-lists/group-lists.component";
import {GroupListsFormComponent} from "./group-lists/group-lists-form/group-lists-form.component";
import {ListTypeFormComponent} from "./list-types/list-type-form/list-type-form.component";
import {ManageRecordsFormComponent} from "./manage-records/manage-records-form/manage-records-form.component";
import {ManageRecordsComponent} from "./manage-records/manage-records.component";
import {ValidationRecordsComponent} from "./validation-records/validation-records.component";

const routes: Routes = [
    {
        path: '',
        component: RestrictiveListsComponent,
        children: [
            {
                path: 'group-lists',
                component: GroupListsComponent,
            },
            {
                path: 'group-lists/create',
                component: GroupListsFormComponent,
            },
            {
                path: 'group-lists/edit/:id',
                component: GroupListsFormComponent,
            },
            {
                path: 'list-types',
                component: ListTypesComponent,
            },
            {
                path: 'list-types/create',
                component: ListTypeFormComponent,
            },
            {
                path: 'list-types/edit/:id',
                component: ListTypeFormComponent,
            },
            {
                path: 'manage-records',
                component: ManageRecordsComponent,
            },
            {
                path: 'manage-records/create',
                component: ManageRecordsFormComponent,
            },
            {
                path: 'manage-records/edit/:id',
                component: ManageRecordsFormComponent,
            },
            {
                path: 'validation-records',
                component: ValidationRecordsComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RestrictiveListsRoutingModule {
}
