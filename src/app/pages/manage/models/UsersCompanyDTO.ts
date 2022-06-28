export class UserDTO {
    id: string;
    identification: string;
    login: string;
    name: string;
    lastName: string;
    email: string;
    createdAt: string;
}
export class UserListDTO {
    UserDTOList: UserDTO[];    
}
