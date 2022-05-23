import {Component, OnInit} from '@angular/core';
import {CustomServerDataSource} from "../../../utils/custom-server.data-source";

@Component({
    selector: 'ngx-validation-records',
    templateUrl: './validation-records.component.html',
    styleUrls: ['./validation-records.component.scss']
})
export class ValidationRecordsComponent implements OnInit {

    constructor() {
    }

    search = '';
    source: CustomServerDataSource;
    settings = {
        actions: {
            add: false,
        },
        mode: 'external',
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
        },
        edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },
        columns: {
            id: {
                title: 'ID',
                type: 'number',
                filter: false,
            },
            identification: {
                title: 'Nombre Lista',
                type: 'string',
                filter: false,
            },
            name: {
                title: 'Tipo Documento',
                type: 'string',
                filter: false,
            },
            lastName: {
                title: 'Documento Identidad',
                type: 'string',
                filter: false,
            },
            email: {
                title: 'Nombre Completo',
                type: 'string',
                filter: false,
            },
            personType: {
                title: 'Tipo Persona',
                type: 'string',
                filter: false,
            },
            strongAlias: {
                title: 'Alias fuerte',
                type: 'string',
                filter: false,
            },
            crime: {
                title: 'Cargo/Delito',
                type: 'string',
                filter: false,
            },
            status: {
                title: 'Estado',
                type: 'string',
                filter: false,
            },
        },
    };

    ngOnInit(): void {
    }

    onValidated() {

    }

    searchUser($event: KeyboardEvent) {

    }
}
