import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NbToastrService} from "@nebular/theme";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
    selector: 'ngx-list-type-form',
    templateUrl: './list-type-form.component.html',
    styleUrls: ['./list-type-form.component.scss']
})
export class ListTypeFormComponent implements OnInit {

    constructor(protected toastrService: NbToastrService,
                private router: Router,
                private route: ActivatedRoute,
                private location: Location,
                private fb: FormBuilder) {
    }

    listTypeForm: FormGroup;
    nameError = null;
    sourceError = null;
    headerTitle = 'CREAR LISTA';

    //weightError = null;

    get name() {
        return this.listTypeForm.get('name');
    }

    get description() {
        return this.listTypeForm.get('description');
    }

    get source() {
        return this.listTypeForm.get('source');
    }

    get typeListGroupId() {
        return this.listTypeForm.get('typeListGroupId');
    }

    get periodicityId() {
        return this.listTypeForm.get('periodicityId');
    }

    ngOnInit(): void {
        this.initListTypeForm();
    }

    initListTypeForm() {
        this.listTypeForm = this.fb.group({
            name: this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
            description: this.fb.control('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
            source: this.fb.control('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
            typeListGroupId: this.fb.control('', [Validators.required]),
            periodicityId: this.fb.control('', [Validators.required])
        });
    }

    save() {

    }

    back($event: MouseEvent) {
        $event.preventDefault();
        this.location.back();
    }
}
