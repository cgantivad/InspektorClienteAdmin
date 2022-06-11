import {Component, OnInit} from '@angular/core';
import {CustomServerDataSource} from '../../../utils/custom-server.data-source';
import {Router} from '@angular/router';
import {List} from '../interfaces/list';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ListService} from "../backend/common/services/list.service";

@Component({
    selector: 'ngx-manage-records',
    templateUrl: './manage-records.component.html',
    styleUrls: ['./manage-records.component.scss'],
})
export class ManageRecordsComponent implements OnInit {

    constructor(private router: Router,
                private fb: FormBuilder,
                private listService: ListService) {
    }

    listFilter: List = {};
    dataSource: CustomServerDataSource;
    formGroup: FormGroup;

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

    get alias() {
        return this.formGroup.get('alias');
    }

    get document() {
        return this.formGroup.get('document');
    }

    get entity() {
        return this.formGroup.get('entity');
    }

    get listTypeId() {
        return this.formGroup.get('listTypeId');
    }

    get activated() {
        return this.formGroup.get('activated');
    }

    get source() {
        return this.formGroup.get('source');
    }

    get zone() {
        return this.formGroup.get('zone');
    }

    get validated() {
        return this.formGroup.get('validated');
    }

    get userId() {
        return this.formGroup.get('userId');
    }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.formGroup = this.fb.group({
            alias: this.fb.control(''),
            document: this.fb.control(''),
            entity: this.fb.control(''),
            listTypeId: this.fb.control(''),
            activated: this.fb.control(''),
            source: this.fb.control(''),
            zone: this.fb.control(''),
            validated: this.fb.control(''),
            userId: this.fb.control(''),
        });
    }

    onCreate() {
        this.router.navigate([`/pages/restrictive-lists/manage-records/create`]);
    }

    search() {
        const data: List = this.formGroup.value;
        console.log('form', data);
    }
}
