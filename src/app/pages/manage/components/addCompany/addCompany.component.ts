import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalDataSource, Ng2SmartTableComponent } from 'ng2-smart-table';
import { filter } from 'rxjs-compat/operator/filter';
import { log } from 'console';
import { NbCheckboxComponent, NbComponentStatus, NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService, NbToggleComponent } from '@nebular/theme';
import { ToasterConfig } from 'angular2-toaster';
import { CompanyDTO, CompanyDTOListDTO, PlanDTOListDTO } from '../../models/CompanyDTOListDTO';
import { CompanyService } from '../../services/Company.service';
import { CheckboxEditorComponent } from 'ng2-smart-table/lib/components/cell/cell-editors/checkbox-editor.component';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from '../../../../@components/editors/smart-table-datepicker/smart-table-datepicker.component';
import * as dayjs from 'dayjs';
import { UsersByCompanyService } from '../../services/UsersByCompany.service';

@Component({
  selector: 'ngx-addCompany',
  templateUrl: './addCompany.component.html',
  styleUrls: ['./addCompany.component.scss']
})
export class AddCompanyComponent implements OnInit {

  @ViewChild('table') table: Ng2SmartTableComponent;
  public selectedRows = [];
  CompanyId: Number;
  //#region Variables Toast
  public config: ToasterConfig;
  public plans: PlanDTOListDTO = new PlanDTOListDTO();
  public index = 1;
  public destroyByClick = true;
  public duration = 2000;
  public hasIcon = true;
  public position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  public preventDuplicates = false;
  public status: NbComponentStatus = 'primary';

  public title = 'HI there!';
  public content = `I'm cool toaster!`;

  public types: NbComponentStatus[] = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ];
  positions: string[] = [
    NbGlobalPhysicalPosition.TOP_RIGHT,
    NbGlobalPhysicalPosition.TOP_LEFT,
    NbGlobalPhysicalPosition.BOTTOM_LEFT,
    NbGlobalPhysicalPosition.BOTTOM_RIGHT,
    NbGlobalLogicalPosition.TOP_END,
    NbGlobalLogicalPosition.TOP_START,
    NbGlobalLogicalPosition.BOTTOM_END,
    NbGlobalLogicalPosition.BOTTOM_START,
  ];

  quotes = [
    { title: null, body: 'We rock at Angular' },
    { title: null, body: 'Titles are not always needed' },
    { title: null, body: 'Toastr rock!' },
  ];
  //#endregion
  public flags = false;
  public listPlans: any = this.getDataPlans();
  public settings = {

    actions: {
      add: true,
      edit: true,
      delete: true,

    }
    ,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Nombre Empresa',
        type: 'string',
      },
      identification: {
        title: 'Número Documento',
        type: 'number',
      },
      status: {
        title: 'Estado',
        type: 'html',
        valuePrepareFunction: (cell, row, planId) => {
          if (cell == true)
            return 'Activa'
          else
            return 'Desactivada'
        },
        editor: {
          type: 'list',
          config: {
            list: [
              { title: 'Desactivada', value: false },
              { title: 'Activa', value: true }
            ]

          }
        }
      },
      contractDate: {
        title: 'Fecha de Contrato',
        type: 'html',        
        valuePrepareFunction: (cell, row, contractDate) => {

          return dayjs(cell).format('YYYY-MM-DD')
        },
        width: '250px',
        filter: false,
        sortDirection: 'desc',
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        }
      },
      planId: {
        title: 'Plan',
        type: 'html',
        valuePrepareFunction: (cell, row, planId) => {
          var t;
          t = this.plans;
          var a = t.find(element => element.id == cell)
          if (a)
            return a.name
        },
        editor: {
          type: 'list',
          config: {
            list: this.listPlans

          }
        }
      },
      
    },
  };
  source: LocalDataSource = new LocalDataSource();
  public data: CompanyDTOListDTO = new CompanyDTOListDTO();


  constructor(
    private toastrService: NbToastrService,
    private _companyService: CompanyService,
    private _UsersByCompany: UsersByCompanyService
  ) {
  }
  ngOnInit() {
    this.initialize();
  }

  private initialize() {

    this.getAllCompanies();
  }

  //#region Metodos SmartTableData
  onDeleteConfirm(event): void {
    if (window.confirm('Esta seguro de eliminar el registro')) {
      event.confirm.resolve();
      //this.deleteThirdPartyType(event.data.id.toString());
    } else {
      event.confirm.reject();
    }
    console.log(event.data.id);

  }
  onEdit(event) {
    console.log(event);
  }

  onSaveConfirm(event): void {
    console.log(event);
    var datatemporal = event.source.data
    if (!this.isObjEmpty(datatemporal)) {
      this.updateCompany(event.newData);
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event): void {
    console.log(event);
    var datatemporal = event.source.data
    if (!this.isObjEmpty(datatemporal)) {
      this.addCompany(event.newData);
      event.confirm.resolve(event.newData);
    } else {
      //this.showToast("danger", "Error","Debe ingresar todos los valores");
      event.confirm.reject();
    }
  }

  onRowSelect(event: any): void {
    this.flags = true;
    console.log(event.source.data);
    this._UsersByCompany.TriggerUserByCompany.emit(
      {
        data:event.data.id
      })


  }
  //#endregion

  //#region Metodos Privados
  public ChangeStatus(event: any): void {
    const id = event
    console.log(id);

  }
  //#endregion

  //#region Validacion

  //Todo: Valida si los registro de la tabla estan vacios
  private isObjEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  }
  //Todo : Muestra toast segun mensaje
  private showToast(type: NbComponentStatus, title: string, body: string) {
    const hasIcon = this.hasIcon ? {} : { icon: 'alert-circle-outline' };
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
      ...hasIcon,
    };
    const titleContent = title ? `. ${title}` : '';

    this.index += 1;
    this.toastrService.show(
      body,
      `Administración Empresa`,
      config);
  }
  //#endregion

  //#region Servicios
  //#region Get
  public getAllCompanies(CompanyId?: string) {
    this._companyService.getAllCompanies().subscribe((response: CompanyDTOListDTO) => {
      this.data = response;
      this.source = new LocalDataSource(this.data as any);

      console.log(this.settings);

    })
  }

  public getDataPlans() {
    var settingList: any = [];
    // Call API category
    this._companyService.getPlans().subscribe((response: any) => {
      this.plans = response;
      response.forEach(obj => {
        settingList.push({ value: obj.id, title: obj.name })
      });
      let newSettings = this.settings;
      newSettings.columns.planId.editor.config.list = settingList;
      this.settings = Object.assign({}, newSettings);
    });
  }

  //endregion
  //#region Post
  public addCompany(companyDTO: CompanyDTO) {
    this._companyService.AddCompany(companyDTO).subscribe(res => {
      this.showToast("success", null, "Guardado Exitoso")
    });
  }
  //endregion
  //#region Update
  public updateCompany(companyDTO: CompanyDTO) {
    debugger
    this._companyService.updateCompany(companyDTO).subscribe(res => {
      this.showToast("success", null, "Actualizacion Exitosa")
      console.log("Enviado");
    });
  }
  //endregion
  //#region Delete
  /*public deleteThirdPartyType(id:string){
    this._companyService.deleteThirdPartyType(id).subscribe(res => {
      this.showToast("success",null,"Eliminado Exitoso")
      console.log("Enviado");
    });
  }*/
  //endregion
  //#endregion








}
