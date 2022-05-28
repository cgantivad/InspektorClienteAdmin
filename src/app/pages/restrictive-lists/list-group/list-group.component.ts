import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ListGroupService} from '../backend/common/services/list-group.service';
import {CustomServerDataSource} from '../../../utils/custom-server.data-source';
import {ColorSmartTableCellComponent} from '../../../custom-components/smart-table-components/color-smart-table-cell/color-smart-table-cell.component';
import {Subject} from 'rxjs/Rx';

@Component({
    selector: 'ngx-list-group',
    templateUrl: './list-group.component.html',
    styleUrls: ['./list-group.component.scss'],
})
export class ListGroupComponent implements OnInit {

    constructor(private router: Router,
                private listGroupService: ListGroupService,
    ) {
        this.source = this.listGroupService.getListGroupsServerDataSource();
    }

    searchTextChanged = new Subject<string>();
    searchText = '';
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
            name: {
                title: 'Nombre de Grupo',
                type: 'string',
                filter: false,
            },
            description: {
                title: 'Descripción',
                type: 'string',
                filter: false,
            },
            color: {
                title: 'Colorimetria',
                type: 'custom',
                renderComponent: ColorSmartTableCellComponent,
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
        this.router.navigate([`/pages/restrictive-lists/group-lists/create`]);
    }

    onEdit($event: any) {
        const user = $event.data;
        this.router.navigate([`/pages/restrictive-lists/group-lists/edit/${user.id}`]);
    }

    search($event) {
        this.searchTextChanged.next($event.target.value);
    }

    onDelete($event: any) {

    }
}
