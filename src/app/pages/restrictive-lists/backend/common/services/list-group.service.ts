import {Injectable} from '@angular/core';
import {ListGroupApi} from '../api/list-group.api';
import {Observable} from 'rxjs';
import {CustomServerDataSource} from '../../../../../utils/custom-server.data-source';
import {ListGroup} from '../../../interfaces/list-group';
import {ApiResponse} from "../../../../../utils/api-response";

@Injectable()
export class ListGroupService {

    constructor(private api: ListGroupApi) {

    }

    getListGroupsServerDataSource(): CustomServerDataSource {
        return this.api.getListGroupsServerDataSource();
    }

    get(id: number): Observable<ApiResponse<ListGroup>> {
        return this.api.get(id);
    }

    create(data: ListGroup): Observable<ListGroup> {
        return this.api.create(data);
    }

    update(id: number, data: ListGroup): Observable<ListGroup> {
        return this.api.update(id, data);
    }
}
