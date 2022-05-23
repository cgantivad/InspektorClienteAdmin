import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NbToastrService} from "@nebular/theme";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
    selector: 'ngx-manage-records-form',
    templateUrl: './manage-records-form.component.html',
    styleUrls: ['./manage-records-form.component.scss']
})
export class ManageRecordsFormComponent implements OnInit {

    constructor(protected toastrService: NbToastrService,
                private router: Router,
                private route: ActivatedRoute,
                private location: Location,
                private fb: FormBuilder) {
    }

    manageRecordForm: FormGroup;

    documentError = null;
    nameError = null;
    strongAliasError = null;
    weakAliasError = null;

    sourceError = null;
    headerTitle = 'CREAR REGISTRO';

    get user() {
        return this.manageRecordForm.get('user');
    }

    get documentType() {
        return this.manageRecordForm.get('documentType');
    }

    get personType() {
        return this.manageRecordForm.get('personType');
    }

    get document() {
        return this.manageRecordForm.get('document');
    }

    get name() {
        return this.manageRecordForm.get('name');
    }

    get strongAlias() {
        return this.manageRecordForm.get('strongAlias');
    }

    get weakAlias() {
        return this.manageRecordForm.get('weakAlias');
    }

    get typeListId() {
        return this.manageRecordForm.get('weakAlias');
    }

    get crime() {
        return this.manageRecordForm.get('crime');
    }

    get source() {
        return this.manageRecordForm.get('source');
    }

    get zone() {
        return this.manageRecordForm.get('zone');
    }

    get link() {
        return this.manageRecordForm.get('link');
    }

    get status() {
        return this.manageRecordForm.get('status');
    }

    get recordSummary() {
        return this.manageRecordForm.get('recordSummary');
    }

    get acts() {
        return this.manageRecordForm.get('acts');
    }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.manageRecordForm = this.fb.group({
            user: this.fb.control('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
            documentType: this.fb.control('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
            personType: this.fb.control('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
            document: this.fb.control('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
            name: this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
            strongAlias: this.fb.control('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
            weakAlias: this.fb.control('', [Validators.required]),
            typeListId: this.fb.control('', [Validators.required]),
            crime: this.fb.control('', [Validators.required]),
            source: this.fb.control('', [Validators.required]),
            zone: this.fb.control('', [Validators.required]),
            link: this.fb.control('', [Validators.required]),
            status: this.fb.control('', [Validators.required]),
            recordSummary: this.fb.control('', [Validators.required]),
            acts: this.fb.control('', [Validators.required]),
        });
    }

    back($event: MouseEvent) {
        $event.preventDefault();
        this.location.back();
    }

    save() {

    }
}
