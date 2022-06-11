import {CustomHttpService} from '../../../../../utils/custom-http.service';
import {Injectable} from '@angular/core';
import {CustomServerDataSource} from '../../../../../utils/custom-server.data-source';
import {Observable} from 'rxjs';
import {ApiResponse} from '../../../../../utils/api-response';
import {List} from '../../../interfaces/list';

@Injectable()
export class ListApi {

    private readonly apiController: string = 'restrictive-lists/lists';

    constructor(private api: CustomHttpService) {
    }

    getListServerDataSource(): CustomServerDataSource {
        return this.api.getServerDataSource(`${this.apiController}`);
    }

    get(id: number): Observable<ApiResponse<List>> {
        return this.api.get(`${this.apiController}/${id}`);
    }

    create(data: List): Observable<List> {
        return this.api.post(`${this.apiController}`, data);
    }

    update(id: number, data: List): Observable<List> {
        return this.api.put(`${this.apiController}/${id}`, data);
    }

    getBaseList(): Observable<ApiResponse<List>> {
        return this.api.get(`${this.apiController}/create`);
    }
}
