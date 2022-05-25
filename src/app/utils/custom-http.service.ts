/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {HttpService} from '../@core/backend/common/api/http.service';
import {ApiPaginationResponse} from './api-pagination-response';
import {PaginationFilter} from './pagination-filter';
import {LocalDataSource} from 'ng2-smart-table';
import {CustomServerDataSource} from './custom-server.data-source';

@Injectable()
export class CustomHttpService extends HttpService {

    constructor(protected http: HttpClient) {
        super(http);
    }


    async getDataSource(endpoint: string, paginationFilter: PaginationFilter): Promise<LocalDataSource> {
        const params = new HttpParams({
            fromObject: {
                query: paginationFilter.query,
                perPage: paginationFilter.perPage.toString(),
                pageNumber: paginationFilter.pageNumber.toString(),
            },
        });

        const options = {
            params,
        };

        const perPage = paginationFilter.perPage;
        const pageNumber = paginationFilter.pageNumber;

        const apiPaginationResponse = await this.http
            .get<ApiPaginationResponse<any>>(`${this.apiUrl}/${endpoint}`, options).toPromise();

        const items = apiPaginationResponse.data;
        const dataSource = new LocalDataSource(items);

        dataSource.setPaging(pageNumber, perPage, true);

        return dataSource;
    }

    getServerDataSource(endpoint: string): CustomServerDataSource {
        const url = `${this.apiUrl}/${endpoint}`;

        return new CustomServerDataSource(this.http,
            {
                endPoint: url,
                totalKey: 'total',
                dataKey: 'data',
                pagerPageKey: 'pageNumber',
                pagerLimitKey: 'perPage',
                /*filterFieldKey: 'filterBy#field#',
                sortFieldKey: 'sortBy',
                sortDirKey: 'orderBy',*/
            });
    }
}
