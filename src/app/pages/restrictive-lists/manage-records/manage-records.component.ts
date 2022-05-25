import {Component, OnInit} from '@angular/core';
import {CustomServerDataSource} from "../../../utils/custom-server.data-source";
import {Router} from "@angular/router";

@Component({
    selector: 'ngx-manage-records',
    templateUrl: './manage-records.component.html',
    styleUrls: ['./manage-records.component.scss']
})
export class ManageRecordsComponent implements OnInit {

    constructor(private router: Router,) {
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
            listName: {
                title: 'Nombre Lista',
                type: 'string',
                filter: false,
            },
            document: {
                title: 'Documento Identidad',
                type: 'string',
                filter: false,
            },
            name: {
                title: 'Nombre Completo',
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
            validated: {
                title: 'Validado',
                type: 'string',
                filter: false,
            },
            justification: {
                title: 'Justificación',
                type: 'string',
                filter: false,
            },
            updatedAt: {
                title: 'Fecha Actualización',
                type: 'string',
                filter: false,
            },
        },
    };

    ngOnInit(): void {
    }

    onCreate() {
        this.router.navigate([`/pages/restrictive-lists/manage-records/create`]);
    }
}
