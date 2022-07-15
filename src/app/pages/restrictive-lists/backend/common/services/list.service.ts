import {CustomServerDataSource} from '../../../../../utils/custom-server.data-source';
import {Observable} from 'rxjs';
import {ApiResponse} from '../../../../../utils/api-response';
import {ListApi} from '../api/list.api';
import {Injectable} from '@angular/core';
import {List} from '../../../interfaces/list';

@Injectable()
export class ListService {

    constructor(private api: ListApi) {
    }

    getListServerDataSource(): CustomServerDataSource {
        return this.api.getListServerDataSource();
    }

    get(id: number): Observable<ApiResponse<List>> {
        return this.api.get(id);
    }

    create(data: List): Observable<ApiResponse<List>> {
        return this.api.create(data);
    }

    update(id: number, data: List): Observable<ApiResponse<List>> {
        return this.api.update(id, data);
    }

    getCreateFromData(): Observable<ApiResponse<List>> {
        return this.api.getCreateFromData();
    }

    getSearchFormFilters(): Observable<ApiResponse<List>> {
        return this.api.getSearchFormFilters();
    }
}
