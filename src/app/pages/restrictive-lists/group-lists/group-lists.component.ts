import {Component, OnInit} from '@angular/core';
import {CustomServerDataSource} from "../../../utils/custom-server.data-source";
import {Router} from "@angular/router";

@Component({
    selector: 'ngx-group-lists',
    templateUrl: './group-lists.component.html',
    styleUrls: ['./group-lists.component.scss']
})
export class GroupListsComponent implements OnInit {

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
            identification: {
                title: 'Nombre de Grupo',
                type: 'string',
                filter: false,
            },
            name: {
                title: 'Descripción',
                type: 'string',
                filter: false,
            },
            lastName: {
                title: 'Colorimetría',
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
    }

    onCreate() {
        this.router.navigate([`/pages/restrictive-lists/group-lists/create`]);
    }

    onEdit($event: any) {
        const user = $event.data;
        this.router.navigate([`/pages/restrictive-lists/group-lists/edit/${user.id}`]);
    }

    searchUser($event: KeyboardEvent) {

    }
}
