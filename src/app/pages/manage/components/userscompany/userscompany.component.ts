import { Component, Input, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserListDTO } from '../../models/UsersCompanyDTO';
import { UserManagementService } from '../../services/user-management.service';
import { UsersByCompanyService } from '../../services/UsersByCompany.service';

@Component({
  selector: 'ngx-userscompany',
  templateUrl: './userscompany.component.html',
  styleUrls: ['./userscompany.component.scss']
})
export class UserscompanyComponent implements OnInit {
  @Input() CompanyId:Number;
  constructor(private _userservice:UserManagementService, private _UsersByCompany: UsersByCompanyService) { }
  settingsUsers = {
    actions: {
      add:true,
      edit:true,
      delete:true, 
    },    
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
        /*id: {
            title: 'Id',
            type: 'number',
            filter: false,
        },*/
        identification: {
            title: 'Numero Documento',
            type: 'string',
            filter: false,
        },
        name: {
            title: 'Nombres',
            type: 'string',
            filter: false,
        },
        lastName: {
            title: 'Apellidos',
            type: 'string',
            filter: false,
        },
        email: {
            title: 'E-mail',
            type: 'string',
            filter: false,
        },
        status: {
            title: 'Fecha de creación',
            type: 'string',
            filter: false,
        },
    },}
sourceUsers: LocalDataSource = new LocalDataSource();
public dataUsers :UserListDTO = new UserListDTO();
ngOnInit() {
  this._UsersByCompany.TriggerUserByCompany.subscribe(obj=>
    {
      console.log(obj.data);
      this.getAllCompanies(obj.data);
    })
}

private initialize() {  
    // this.getAllCompanies(this.CompanyId)
}

public getAllCompanies(CompanyId?: Number){
  debugger
  this._userservice.getAllByCompanyID(CompanyId).subscribe((response:any) =>{
    debugger
    console.log(response);
  this.dataUsers = response.data;
  this.sourceUsers = new LocalDataSource(this.dataUsers as any);

  console.log(this.settingsUsers);
  
  })
}

}
