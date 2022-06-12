import {Component, OnInit} from '@angular/core';
import {CustomServerDataSource} from '../../../utils/custom-server.data-source';
import {ListValidationService} from '../backend/common/services/list-validation.service';
import {Subject} from "rxjs/Rx";

@Component({
    selector: 'ngx-validation-records',
    templateUrl: './validation-records.component.html',
    styleUrls: ['./validation-records.component.scss'],
})
export class ValidationRecordsComponent implements OnInit {

    constructor(private listValidationService: ListValidationService) {
        this.dataSource = listValidationService.getDataSource();
    }

    searchText = '';
    searchTextChanged = new Subject<string>();
    dataSource: CustomServerDataSource;
    settings = {
        actions: {
            add: false,
            edit: false,
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
            // name: {
            //     title: 'Tipo Documento',
            //     type: 'string',
            //     filter: false,
            // },
            documentType: {
                title: 'Tipo Documento',
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
            personType: {
                title: 'Tipo Persona',
                type: 'html',
                filter: false,
                valuePrepareFunction: (cell, row) => {
                    return cell.name;
                },
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
            status: {
                title: 'Estado',
                type: 'string',
                filter: false,
            },
        },
    };

    ngOnInit(): void {
        this.searchTextChanged
            .debounceTime(250)
            .distinctUntilChanged()
            .subscribe((query) => {
                this.dataSource.setSearchQuery(query);
            });
    }

    onValidated() {

    }

    search($event) {
        this.searchTextChanged.next($event.target.value);
    }
}
