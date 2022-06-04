import {Component, OnInit} from '@angular/core';
import {CustomServerDataSource} from '../../../utils/custom-server.data-source';
import {Router} from '@angular/router';
import {ListTypeService} from '../backend/common/services/list-type.service';
import {Subject} from 'rxjs/Rx';

@Component({
    selector: 'ngx-list-types',
    templateUrl: './list-types.component.html',
    styleUrls: ['./list-types.component.scss'],
})
export class ListTypesComponent implements OnInit {

    constructor(private router: Router, private listTypeService: ListTypeService,
    ) {
        this.source = this.listTypeService.getListTypesServerDataSource();
    }

    searchText = '';
    searchTextChanged = new Subject<string>();
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
                title: 'Codigo Lista',
                type: 'number',
                filter: false,
            },
            identification: {
                title: 'Nombre Lista',
                type: 'string',
                filter: false,
            },
            name: {
                title: 'Nombre Grupo',
                type: 'string',
                filter: false,
            },
            lastName: {
                title: 'Periodicidad',
                type: 'string',
                filter: false,
            },
            email: {
                title: 'Colorimetria',
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
                this.source.setSearchQuery(query);
            });
    }

    onCreate() {
        this.router.navigate([`/pages/restrictive-lists/list-types/create`]);
    }

    onEdit($event: any) {
        const record = $event.data;
        this.router.navigate([`/pages/restrictive-lists/list-types/edit/${record.id}`]);
    }

    search($event) {
        this.searchTextChanged.next($event.target.value);
    }

    onDelete($event: any) {

    }
}
