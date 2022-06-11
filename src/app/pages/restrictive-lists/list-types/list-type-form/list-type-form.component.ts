import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NbToastrService} from '@nebular/theme';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ListTypeService} from '../../backend/common/services/list-type.service';
import {ListType} from '../../interfaces/list-type';

@Component({
    selector: 'ngx-list-type-form',
    templateUrl: './list-type-form.component.html',
    styleUrls: ['./list-type-form.component.scss'],
})
export class ListTypeFormComponent implements OnInit {

    constructor(protected toastrService: NbToastrService,
                private router: Router,
                private route: ActivatedRoute,
                private location: Location,
                private listTypeService: ListTypeService,
                private fb: FormBuilder) {
    }

    formGroup: FormGroup;
    nameError = null;
    descriptionError = null;
    sourceError = null;
    headerTitle = 'CREAR LISTA';
    listType: ListType;

    get name() {
        return this.formGroup.get('name');
    }

    get description() {
        return this.formGroup.get('description');
    }

    get source() {
        return this.formGroup.get('source');
    }

    get listGroupId() {
        return this.formGroup.get('listGroupId');
    }

    get countryId() {
        return this.formGroup.get('countryId');
    }

    get periodicityId() {
        return this.formGroup.get('periodicityId');
    }

    ngOnInit(): void {
        this.initForm();
        this.loadData();
    }

    initForm() {
        this.formGroup = this.fb.group({
            id: this.fb.control(''),
            name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
            description: this.fb.control('', [Validators.required, Validators.minLength(1)]),
            source: this.fb.control('', [Validators.required, Validators.minLength(1)]),
            listGroupId: this.fb.control(null, [Validators.required]),
            countryId: this.fb.control('', [Validators.required]),
            periodicityId: this.fb.control('', [Validators.required]),
        });
    }

    loadData() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id != null) {
            this.headerTitle = 'EDITAR LISTA';
            this.listTypeService.get(+id)
                .subscribe(response => {
                    const data = response.data;
                    this.setFormGroup(data);
                }, error => {
                    this.toastrService.danger('', 'Registro no econtrado', {
                        icon: '',
                    });
                });
        } else {
            this.listTypeService.getBaseListType()
                .subscribe(response => {
                    const data = response.data;
                    this.setFormGroup(data);
                }, error => {
                    this.toastrService.danger('', error, {
                        icon: '',
                    });
                });
        }
    }

    setFormGroup(record: ListType) {
        this.listType = record;
        this.formGroup.setValue({
            id: record.id ? record.id : '',
            name: record.name ? record.name : '',
            description: record.description ? record.description : '',
            source: record.source ? record.source : '',
            listGroupId: record.listGroupId ? record.listGroupId : '',
            countryId: record.countryId ? record.countryId : '',
            periodicityId: record.periodicityId ? record.periodicityId : '',
        });
    }

    save() {
        const id = this.route.snapshot.paramMap.get('id');
        const data: ListType = this.formGroup.value;

        if (id == null) {
            this.listTypeService.create(data).subscribe(() => {
                this.formGroup.reset();
                this.toastrService.success('', '¡Registro exitoso!', {
                    icon: '',
                });
                this.clearErrors();
            }, errorResponse => {
                this.setupErrorResponse(errorResponse);
            });
        } else {
            this.listTypeService.update(+id, data).subscribe((record) => {
                this.toastrService.success('', '¡Registro exitoso!', {
                    icon: '',
                });
                this.clearErrors();
            }, errorResponse => {
                this.setupErrorResponse(errorResponse);
            });
        }
    }

    back($event: MouseEvent) {
        $event.preventDefault();
        this.location.back();
    }

    private setupErrorResponse(errorResponse) {
        const errorObj = errorResponse.error.errors;
        if (errorObj.hasOwnProperty('name'))
            this.nameError = errorObj.name;

        if (errorObj.hasOwnProperty('description'))
            this.descriptionError = errorObj.description;
    }

    private clearErrors() {
        this.nameError = null;
        this.descriptionError = null;
    }
}
