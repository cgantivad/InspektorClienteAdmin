import {Component, OnInit} from '@angular/core';
import {NbToastrService} from '@nebular/theme';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ListGroupService} from '../../backend/common/services/list-group.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ListGroup} from "../../interfaces/list-group";

@Component({
    selector: 'ngx-list-group-form',
    templateUrl: './list-group-form.component.html',
    styleUrls: ['./list-group-form.component.scss'],
})
export class ListGroupFormComponent implements OnInit {

    constructor(protected toastrService: NbToastrService,
                private router: Router,
                private route: ActivatedRoute,
                private location: Location,
                private listGroupService: ListGroupService,
                private fb: FormBuilder) {
    }

    formGroup: FormGroup;
    nameError = null;
    sourceError = null;

    //weightError = null;
    headerTitle = 'CREAR GRUPO';

    get name() {
        return this.formGroup.get('name');
    }

    get description() {
        return this.formGroup.get('description');
    }

    get color() {
        return this.formGroup.get('color');
    }

    ngOnInit(): void {
        this.initForm();
        this.loadData();
    }

    initForm() {
        this.formGroup = this.fb.group({
            id: this.fb.control(''),
            name: this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
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
                    this.formGroup.setValue({
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
        const data: ListGroup = this.formGroup.value;
        console.log(data);
    }

    back($event: MouseEvent) {
        $event.preventDefault();
        this.location.back();
    }
}
