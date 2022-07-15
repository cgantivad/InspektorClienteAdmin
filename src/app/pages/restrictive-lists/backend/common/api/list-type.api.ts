import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CustomServerDataSource} from '../../../../../utils/custom-server.data-source';
import {CustomHttpService} from '../../../../../utils/custom-http.service';
import {ApiResponse} from '../../../../../utils/api-response';
import {ListType} from '../../../interfaces/list-type';

@Injectable()
export class ListTypeApi {

    private readonly apiController: string = 'restrictive-lists/list-types';

    constructor(private api: CustomHttpService) {
    }

    getListTypesServerDataSource(): CustomServerDataSource {
        return this.api.getServerDataSource(`${this.apiController}`);
    }

    get(id: number): Observable<ApiResponse<ListType>> {
        return this.api.get(`${this.apiController}/${id}`);
    }

    create(data: ListType): Observable<ListType> {
        return this.api.post(`${this.apiController}`, data);
    }

    update(id: number, data: ListType): Observable<ListType> {
        return this.api.put(`${this.apiController}/${id}`, data);
    }

    getBaseListType(): Observable<ApiResponse<ListType>> {
        return this.api.get(`${this.apiController}/create`);
    }
}
