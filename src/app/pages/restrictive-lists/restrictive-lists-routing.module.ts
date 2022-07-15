import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RestrictiveListsComponent} from './restrictive-lists.component';
import {ListTypesComponent} from './list-types/list-types.component';
import {ListTypeFormComponent} from './list-types/list-type-form/list-type-form.component';
import {ManageRecordsFormComponent} from './manage-records/manage-records-form/manage-records-form.component';
import {ManageRecordsComponent} from './manage-records/manage-records.component';
import {ValidationRecordsComponent} from './validation-records/validation-records.component';
import {ListGroupComponent} from './list-group/list-group.component';
import {ListGroupFormComponent} from './list-group/list-group-form/list-group-form.component';

const routes: Routes = [
    {
        path: '',
        component: RestrictiveListsComponent,
        children: [
            {
                path: 'list-groups',
                component: ListGroupComponent,
            },
            {
                path: 'list-groups/create',
                component: ListGroupFormComponent,
            },
            {
                path: 'list-groups/edit/:id',
                component: ListGroupFormComponent,
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
