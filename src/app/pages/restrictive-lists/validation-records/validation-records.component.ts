import {Component, OnInit} from '@angular/core';
import {CustomServerDataSource} from '../../../utils/custom-server.data-source';
import {ListValidationService} from '../backend/common/services/list-validation.service';
import {Subject} from 'rxjs/Rx';
import {CheckboxSmartTableCellComponent} from '../../../custom-components/smart-table-components/checkbox-smart-table-cell/checkbox-smart-table-cell.component';
import {NbToastrService} from "@nebular/theme";

@Component({
    selector: 'ngx-validation-records',
    templateUrl: './validation-records.component.html',
    styleUrls: ['./validation-records.component.scss'],
})
export class ValidationRecordsComponent implements OnInit {

    constructor(private listValidationService: ListValidationService,
                private toastrService: NbToastrService,
    ) {
        this.dataSource = listValidationService.getDataSource();
    }

    ids = [];
    searchText = '';
    validated = '';
    allChecked = false;
    searchTextChanged = new Subject<string>();
    dataSource: CustomServerDataSource;
    settings = {
        selectMode: 'multi',
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
            activated: {
                title: 'Estado',
                type: 'string',
                filter: false,
            },
            // validated: {
            //     title: 'Validar',
            //     type: 'custom',
            //     renderComponent: CheckboxSmartTableCellComponent,
            //     filter: false,
            // },
        },
    };

    ngOnInit(): void {
        this.searchTextChanged
            .debounceTime(250)
            .distinctUntilChanged()
            .subscribe((query) => {
                this.refreshDataSource();
            });
    }

    onValidated() {
        this.listValidationService.validate(this.ids)
            .subscribe(() => {
                this.toastrService.success('', '¡Registros validados!', {
                    icon: '',
                });
                this.dataSource.refresh();
            }, error => {
                this.toastrService.danger('', error, {
                    icon: '',
                });
            })
    }

    onCheckAllChange(value) {
        this.dataSource.getElements().then(data => {
            let newData = data.map(item => {
                item.validated = value;
            });
            console.log('data', data);
        });
    }

    onChangeValidateStatusFilter($event) {
        this.refreshDataSource();
    }

    search($event) {
        this.searchTextChanged.next($event.target.value);
    }

    refreshDataSource() {
        this.dataSource.setSearchFilters({
            query: this.searchText,
            validated: this.validated,
        });
    }

    onRowSelect(event) {
        this.ids = event.selected.map(item => item.id);
    }
}
