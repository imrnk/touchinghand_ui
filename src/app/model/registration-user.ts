
export class RegistrationUser {

    username : string;
    password : string;
    firstName : string;
    lastName : string;
    
    constructor(u: string, p : string, f : string, l : string) {
        this.username= u;
        this.password = p;
        this.firstName = f;
        this.lastName = l;
    }
}