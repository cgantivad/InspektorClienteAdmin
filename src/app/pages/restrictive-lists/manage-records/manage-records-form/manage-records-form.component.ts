import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NbToastrService} from '@nebular/theme';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ListService} from '../../backend/common/services/list.service';
import {List} from '../../interfaces/list';
import {ListType} from "../../interfaces/list-type";

@Component({
    selector: 'ngx-manage-records-form',
    templateUrl: './manage-records-form.component.html',
    styleUrls: ['./manage-records-form.component.scss'],
})
export class ManageRecordsFormComponent implements OnInit {

    constructor(protected toastrService: NbToastrService,
                private router: Router,
                private route: ActivatedRoute,
                private location: Location,
                private listService: ListService,
                private fb: FormBuilder) {
    }

    formGroup: FormGroup;

    documentError = null;
    nameError = null;
    aliasError = null;
    weakAliasError = null;
    private descriptionError: any;
    listRecord: List;

    sourceError = null;
    headerTitle = 'CREAR REGISTRO';

    get user() {
        return this.formGroup.get('user');
    }

    get documentTypeId() {
        return this.formGroup.get('documentTypeId');
    }

    get personTypeId() {
        return this.formGroup.get('personTypeId');
    }

    get document() {
        return this.formGroup.get('document');
    }

    get name() {
        return this.formGroup.get('name');
    }

    get alias() {
        return this.formGroup.get('alias');
    }

    get weakAlias() {
        return this.formGroup.get('weakAlias');
    }

    get listTypeId() {
        return this.formGroup.get('listTypeId');
    }

    get crime() {
        return this.formGroup.get('crime');
    }

    get source() {
        return this.formGroup.get('source');
    }

    get zone() {
        return this.formGroup.get('zone');
    }

    get link() {
        return this.formGroup.get('link');
    }

    get activated() {
        return this.formGroup.get('activated');
    }

    get summary() {
        return this.formGroup.get('summary');
    }

    get acts() {
        return this.formGroup.get('acts');
    }

    get startDate() {
        return this.formGroup.get('startDate');
    }

    get endDate() {
        return this.formGroup.get('endDate');
    }

    get entity() {
        return this.formGroup.get('entity');
    }

    ngOnInit(): void {
        this.initForm();
        this.loadData();
    }

    initForm() {
        this.formGroup = this.fb.group({
            id: this.fb.control(''),
            documentTypeId: this.fb.control('', [Validators.required]),
            personTypeId: this.fb.control('', [Validators.required]),
            document: this.fb.control('', [Validators.required, Validators.minLength(1)]),
            name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
            alias: this.fb.control('', [Validators.required, Validators.minLength(1)]),
            weakAlias: this.fb.control('', [Validators.required]),
            listTypeId: this.fb.control('', [Validators.required]),
            crime: this.fb.control('', [Validators.required]),
            source: this.fb.control('', [Validators.required]),
            zone: this.fb.control('', [Validators.required]),
            link: this.fb.control('', [Validators.required]),
            activated: this.fb.control('', [Validators.required]),
            summary: this.fb.control('', [Validators.required]),
            acts: this.fb.control('', [Validators.required]),
            entity: this.fb.control('', [Validators.required]),
            startDate: this.fb.control('', [Validators.required]),
            endDate: this.fb.control('', [Validators.required]),
        });
    }

    loadData() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id != null) {
            this.headerTitle = 'EDITAR REGISTRO';
            this.listService.get(+id)
                .subscribe(response => {
                    const data = response.data;
                    this.setFormGroup(data);
                }, error => {
                    this.toastrService.danger('', 'Registro no econtrado', {
                        icon: '',
                    });
                });
        } else {
            this.listService.getBaseList()
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

    setFormGroup(record: List) {
        this.listRecord = record;

        this.formGroup.patchValue({
            id: record.id ? record.id : '',
            name: record.name ? record.name : '',
            document: record.document ? record.document : '',
            alias: record.alias ? record.alias : '',
            weakAlias: record.weakAlias ? record.weakAlias : '',
            crime: record.crime ? record.crime : '',
            source: record.source ? record.source : '',
            zone: record.zone ? record.zone : '',
            link: record.link ? record.link : '',
            summary: record.summary ? record.summary : '',
            acts: record.acts ? record.acts : '',
            entity: record.entity ? record.entity : '',
            activated: record.activated ? record.activated : '',
            startDate: record.startDate ? record.startDate : '',
            endDate: record.endDate ? record.endDate : '',
            listTypeId: record.listTypeId ? record.listTypeId : '',
            personTypeId: record.personTypeId ? record.personTypeId : '',
            documentTypeId: record.documentTypeId ? record.documentTypeId : '',
        });

        /*this.formGroup.setValue({
            id: record.id ? record.id : '',
            name: 'Yao can Xio',
            document: '123123232',
            alias: 'el pepe',
            weakAlias: 'el peque pepe',
            crime: 'Ser un crack',
            source: 'Wikipedia',
            zone: 'la quinta',
            link: 'www.com',
            summary: 'resumen',
            acts: 'hechos',
            entity: 'postobón',
            activated: true,
            startDate: record.startDate ? record.startDate : '',
            endDate: record.endDate ? record.endDate : '',
            listTypeId: record.listTypeId ? record.listTypeId : '',
            personTypeId: record.personTypeId ? record.personTypeId : '',
            documentTypeId: record.documentTypeId ? record.documentTypeId : '',
        });*/
    }

    save() {
        const id = this.route.snapshot.paramMap.get('id');
        const data: List = this.formGroup.value;

        if (id == null) {
            this.listService.create(data).subscribe(() => {
                this.formGroup.reset();
                this.toastrService.success('', '¡Registro exitoso!', {
                    icon: '',
                });
                this.clearErrors();
            }, errorResponse => {
                this.setupErrorResponse(errorResponse);
            });
        } else {
            this.listService.update(+id, data).subscribe((record) => {
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
