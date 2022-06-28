import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from '../../../../environments/environment';
import { UserDTO, UserListDTO } from '../models/UsersCompanyDTO';


@Injectable({
    providedIn: 'root'
})
export class UserManagementService {

    constructor(private http: HttpClient) {

    }


    public getAllByCompanyID(CompanyId: Number): Observable<any> {
        const params = new HttpParams({
            fromObject: {
                CompanyId: CompanyId.toString()
            }
        });

        return this.http.get<any>(`${environment.apiUrl}/management/users/GetAllByCompanyId`, { params: params })
    }

}
