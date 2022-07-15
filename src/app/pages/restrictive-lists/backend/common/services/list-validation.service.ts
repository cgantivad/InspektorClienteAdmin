import {Injectable} from '@angular/core';
import {ListValidationApi} from '../api/list-validation.api';
import {CustomServerDataSource} from '../../../../../utils/custom-server.data-source';

@Injectable()
export class ListValidationService {

    constructor(private api: ListValidationApi) {
    }

    getDataSource(): CustomServerDataSource {
        return this.api.getDataSource();
    }

    validate(ids: number[]) {
        return this.api.validate(ids);
    }
}
