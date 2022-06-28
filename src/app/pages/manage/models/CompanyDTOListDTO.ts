export class CompanyDTOListDTO {
    CompanyList: CompanyDTO[];
    //user: UserDTO;
}

export class CompanyDTO {
    id: number | null;
    name: string | null;
    identification: string | null;
    status: boolean | null;
    autoRenewal: boolean | null;
    image: string | null;
    contractDate: string | null;
    planId: number;

    constructor(){
        this.id = 0;
        this.name ='';
        this.identification = '';
        this.status = false;
        this.autoRenewal = false;
        this.image = '';
        this.contractDate = '';
        this.planId = 0;
    }
}

export class PlanDTOListDTO {
    PlanDTOList: PlanDTO[];
    //user: UserDTO;
}

export class PlanDTO {
    id: number | null;
    name: string;
    qtyQueries: number;
    price: number;
    status: boolean;
    userId: number;
    constructor(){
        this.id = 0;
        this.name ='';
        this.qtyQueries = 0;
        this.status = false;
        this.price = 0;
        this.status = false;
        this.userId = 0;
    }
}

