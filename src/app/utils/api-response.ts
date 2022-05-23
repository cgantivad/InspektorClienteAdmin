export interface ApiResponse<T> {
    succeeded: boolean;
    message: string;
    errors: Array<string>;
    data: T;
}
