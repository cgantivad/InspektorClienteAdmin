import {Injectable} from '@angular/core';
import {ListGroupApi} from '../api/list-group.api';
import {Observable} from 'rxjs';
import {CustomServerDataSource} from '../../../../../utils/custom-server.data-source';
import {ListGroup} from '../../../interfaces/list-group';
import {ApiResponse} from "../../../../../utils/api-response";
import {ListType} from "../../../interfaces/list-type";
import {ListTypeApi} from "../api/list-type.api";

@Injectable()
export class ListTypeService {

    constructor(private api: ListTypeApi) {
    }

    getListTypesServerDataSource(): CustomServerDataSource {
        return this.api.getListTypesServerDataSource();
    }

    get(id: number): Observable<ApiResponse<ListType>> {
        return this.api.get(id);
    }

    create(data: ListType): Observable<ListType> {
        return this.api.create(data);
    }

    update(id: number, data: ListType): Observable<ListType> {
        return this.api.update(id, data);
    }

    getBaseListType(): Observable<ApiResponse<ListType>> {
        return this.api.getBaseListType();
    }
}
