import {Component, OnInit} from '@angular/core';
import {CustomServerDataSource} from '../../../utils/custom-server.data-source';
import {Router} from '@angular/router';
import {List} from '../interfaces/list';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ListService} from '../backend/common/services/list.service';
import {NbToastrService} from '@nebular/theme';

@Component({
    selector: 'ngx-manage-records',
    templateUrl: './manage-records.component.html',
    styleUrls: ['./manage-records.component.scss'],
})
export class ManageRecordsComponent implements OnInit {

    constructor(private router: Router,
                private fb: FormBuilder,
                private toastrService: NbToastrService,
                private listService: ListService) {
        this.dataSource = listService.getListServerDataSource();
    }

    listFilter: List = {};
    dataSource: CustomServerDataSource;
    formGroup: FormGroup;

    settings = {
        actions: {
            add: false,
            delete: false,
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
            listType: {
                title: 'Nombre Lista',
                type: 'html',
                filter: false,
                valuePrepareFunction: (cell, row) => {
                    return cell.name;
                },
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
            alias: {
                title: 'Alias fuerte',
                type: 'string',
                filter: false,
            },
            crime: {
                title: 'Cargo/Delito',
                type: 'string',
                filter: false,
            },
            activated: {
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
        this.loadData();
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

    loadData() {
        this.listService.getSearchFormFilters()
            .subscribe(response => {
                const data = response.data;
                this.listFilter = {...data};
            }, error => {
                this.toastrService.danger('', error, {
                    icon: '',
                });
            });
    }

    onCreate() {
        this.router.navigate([`/pages/restrictive-lists/manage-records/create`]);
    }

    onEdit($event: any) {
        const record = $event.data;
        this.router.navigate([`/pages/restrictive-lists/manage-records/edit/${record.id}`]);
    }

    search() {
        const data: List = this.formGroup.value;
        this.dataSource.setSearchFilters({...data});
    }
}
