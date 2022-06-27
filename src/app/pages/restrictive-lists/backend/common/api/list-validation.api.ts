import {Injectable} from '@angular/core';
import {CustomHttpService} from '../../../../../utils/custom-http.service';
import {CustomServerDataSource} from '../../../../../utils/custom-server.data-source';

@Injectable()
export class ListValidationApi {

    private readonly apiController: string = 'restrictive-lists/list-validation';

    constructor(private api: CustomHttpService) {
    }

    getDataSource(): CustomServerDataSource {
        return this.api.getServerDataSource(`${this.apiController}`);
    }

    validate(ids: number[]) {
        return this.api.put(this.apiController, ids);
    }
}
