import {Component, OnInit} from '@angular/core';
import {NbToastrService} from "@nebular/theme";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
    selector: 'ngx-group-lists-form',
    templateUrl: './group-lists-form.component.html',
    styleUrls: ['./group-lists-form.component.scss']
})
export class GroupListsFormComponent implements OnInit {

    constructor(protected toastrService: NbToastrService,
                private router: Router,
                private route: ActivatedRoute,
                private location: Location,
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

    get colorId() {
        return this.groupListForm.get('colorId');
    }

    ngOnInit(): void {
        this.initListTypeForm();
    }

    initListTypeForm() {
        this.groupListForm = this.fb.group({
            name: this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
            description: this.fb.control('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
            colorId: this.fb.control('', [Validators.required])
        });
    }

    save() {

    }

    back($event: MouseEvent) {
        $event.preventDefault();
        this.location.back();
    }
}
