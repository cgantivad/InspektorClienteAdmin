import {Parameter} from './parameter';
import {ListType} from './list-type';

export interface List {
    id?: number;
    name?: string;
    document?: string;
    alias?: string;
    weakAlias?: string;
    crime?: string;
    source?: string;
    zone?: string;
    link?: string;
    summary?: string;
    acts?: string;
    entity?: string;
    startDate?: string;
    endDate?: string;
    activated?: boolean;
    validated?: boolean;

    listType?: ListType;
    personType?: Parameter;
    documentType?: Parameter;

    listTypeId?: number;
    personTypeId?: number;
    documentTypeId?: number;
    userId?: number;

    users?: Parameter[];
    listTypes?: ListType[];
    personTypes?: Parameter[];
    documentTypes?: Parameter[];
}