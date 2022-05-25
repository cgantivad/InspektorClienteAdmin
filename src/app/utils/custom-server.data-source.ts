import {ServerDataSource} from 'ng2-smart-table';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ServerSourceConf} from 'ng2-smart-table/lib/lib/data-source/server/server-source.conf';

export class CustomServerDataSource extends ServerDataSource {
    private _query: string = '';
    protected prevConfFilters = [];
    private _filters = {}

    constructor(http: HttpClient, conf: ServerSourceConf | {}) {
        super(http, conf);
    }

    protected createRequesParams(): HttpParams {
        let httpParams = new HttpParams();

        httpParams = this.addSortRequestParams(httpParams);
        httpParams = this.addFilterRequestParams(httpParams);
        httpParams = this.addSearchRequestParams(httpParams);
        return this.addPagerRequestParams(httpParams);
    }

    setSearchQuery(query: string = '') {
        this._query = query;
        this.pagingConf['page'] = 1;
        this.refresh();
    }

    protected addSearchRequestParams(httpParams: HttpParams): HttpParams {
        const keys = Object.keys(this._filters)

        httpParams = httpParams.set('query', this._query);

        keys.forEach(key => httpParams = httpParams.set(key, this._filters[key]))

        return httpParams;
    }

    setSearchFilters(filters: {}) {
        this._filters = filters
        this.pagingConf['page'] = 1;
        this.refresh();
    }

    // protected addPagerRequestParams(httpParams: HttpParams): HttpParams {
    //     if (this.prevConfFilters.length !== this.filterConf.filters.length) {
    //         this.pagingConf['page'] = 1;
    //     }
    //     this.prevConfFilters = this.filterConf.filters.length ? [...this.filterConf.filters] : [];
    //     return super.addPagerRequestParams(httpParams);
    // }
}
