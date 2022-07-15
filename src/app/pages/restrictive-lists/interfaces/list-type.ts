import {ListGroup} from './list-group';
import {Country} from "./country";
import {ListPeriodicity} from "./list-periodicity";

export interface ListType {
    id: number;
    name: string;
    description: string;
    source: string;
    listGroupId: number;
    countryId: number;
    periodicityId: number;

    periodicity: ListPeriodicity;
    listGroup: ListGroup;

    listGroups: ListGroup[];
    countries: Country[];
    periodicities: ListPeriodicity[];
}
