import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CustomServerDataSource} from '../../../../../utils/custom-server.data-source';
import {CustomHttpService} from '../../../../../utils/custom-http.service';
import {ListGroup} from '../../../interfaces/list-group';
import {ApiResponse} from '../../../../../utils/api-response';

@Injectable()
export class ListGroupApi {

    private readonly apiController: string = 'restrictive-lists/list-groups';

    constructor(private api: CustomHttpService) {
    }

    getListGroupsServerDataSource(): CustomServerDataSource {
        return this.api.getServerDataSource(`${this.apiController}`);
    }

    getAll(): Observable<ApiResponse<ListGroup>> {
        return this.api.get(`${this.apiController}`);
    }

    get(id: number): Observable<ApiResponse<ListGroup>> {
        return this.api.get(`${this.apiController}/${id}`);
    }

    create(data: ListGroup): Observable<ListGroup> {
        return this.api.post(`${this.apiController}`, data);
    }

    update(id: number, data: ListGroup): Observable<ListGroup> {
        return this.api.put(`${this.apiController}/${id}`, data);
    }
}
