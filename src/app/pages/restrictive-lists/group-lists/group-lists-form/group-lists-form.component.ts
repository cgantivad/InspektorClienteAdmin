import {Component, OnInit} from '@angular/core';
import {NbToastrService} from '@nebular/theme';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ListGroupService} from '../../backend/common/services/list-group.service';

@Component({
    selector: 'ngx-group-lists-form',
    templateUrl: './group-lists-form.component.html',
    styleUrls: ['./group-lists-form.component.scss'],
})
export class GroupListsFormComponent implements OnInit {

    constructor(protected toastrService: NbToastrService,
                private router: Router,
                private route: ActivatedRoute,
                private location: Location,
                private listGroupService: ListGroupService,
                private fb: FormBuilder) {
    }

    groupListForm: FormGroup;
    nameError = null;
    sourceError = null;

    //weightError = null;
    headerTitle = 'CREAR GRUPO';

    get name() {
        return this.groupListForm.get('name');
    }

    get description() {
        return this.groupListForm.get('description');
    }

    get color() {
        return this.groupListForm.get('color');
    }

    ngOnInit(): void {
        this.initForm();
        this.loadData();
    }

    initForm() {
        this.groupListForm = this.fb.group({
            id: this.fb.control(''),
            name: this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
            description: this.fb.control('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
            color: this.fb.control('', [Validators.required]),
        });
    }

    loadData() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id != null) {
            this.headerTitle = 'EDITAR GRUPO';
            this.listGroupService.get(+id)
                .subscribe(response => {
                    const listGroup = response.data;
                    console.log(listGroup);
                    this.groupListForm.setValue({
                        id: listGroup.id ? listGroup.id : '',
                        name: listGroup.name ? listGroup.name : '',
                        description: listGroup.description ? listGroup.description : '',
                        color: listGroup.color ? listGroup.color : '',
                    });
                }, error => {
                    this.toastrService.danger('', 'Usuario no econtrado', {
                        icon: '',
                    });
                });
        }
    }

    save() {

    }

    back($event: MouseEvent) {
        $event.preventDefault();
        this.location.back();
    }
}
