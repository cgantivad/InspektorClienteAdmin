import {Observable} from "rxjs";
import {PaginationFilter} from './pagination-filter';
import {DataSource} from 'ng2-smart-table/lib/lib/data-source/data-source';
import {ApiPaginationResponse} from "./api-pagination-response";

export interface ApiRequestMethod {
    // getDataSource(data: PaginationFilter): Promise<DataSource>;
    //getDataSource(data: PaginationFilter): DataSource;

    list<T>(paginationFilter: PaginationFilter): Observable<ApiPaginationResponse<T>>;

    get<T>(id: number): Observable<T>;

    create<T>(data: T): Observable<T>;

    update<T>(id: number, data: T): Observable<T>;

    delete(id: number): Observable<boolean>;
}
