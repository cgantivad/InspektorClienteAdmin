import {ApiResponse} from './api-response';

export interface ApiPaginationResponse<T> extends ApiResponse<T> {
    pageNumber: number;
    perPage: number;
    total: number;
    firstPage: number;
    lastPage: number;
    nextPage: number;
    previousPage: number;
    to: number;
    from: number;
}
