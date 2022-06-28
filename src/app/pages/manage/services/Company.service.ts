import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CompanyDTO, CompanyDTOListDTO, PlanDTO, PlanDTOListDTO } from '../models/CompanyDTOListDTO';



@Injectable({
  providedIn: 'root'
})
export class CompanyService {

    constructor(private http: HttpClient) { }


    public getByCompanyID(): Observable<CompanyDTO> {
      //const params = new HttpParams({ fromObject: { CompanyId } });
      return this.http.get<CompanyDTO>(`${environment.apiUrl}/Company/GetAllCompanies`)
    }

    public getAllCompanies(): Observable<CompanyDTOListDTO> {
      //const params = new HttpParams({ fromObject: { CompanyId } });
      return this.http.get<CompanyDTOListDTO>(`${environment.apiUrl}/Company/GetAllCompanies`)
    }

    public updateCompany(companyDTO:CompanyDTO){
      return this.http.post<CompanyDTO>(`${environment.apiUrl}/Company/UpdateCompany`,companyDTO)
    }

    public AddCompany(companyDTO:CompanyDTO){
      return this.http.post<CompanyDTO>(`${environment.apiUrl}/Company/AddCompany`,companyDTO)
    }

    public getPlans():Observable<PlanDTOListDTO>{
      return this.http.get<PlanDTOListDTO>(`${environment.apiUrl}/Plan/GetPlans`)
    }

/*
public deleteThirdPartyType(ThirdPartyTypeId:string){
  let httpParams = new HttpParams()
    .append("ThirdPartyTypeId", ThirdPartyTypeId)
  //const params = new HttpParams({ fromObject: { ThirdPartyTypeId } });
  return this.http.post<string>(`${environment.apiUrl}/ThirdPartyType/DeleteThirdPartyType`,null,{params : httpParams})
}*/


}
