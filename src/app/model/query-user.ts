export class QueryUserResult {

     id : String;
     firstName : String;
     lastName : String;
     email : String;
     username : String;
     authorities : Array<String>;
     active : boolean;

     constructor(i : String, f : String, l : String, e : String, u : String, au : Array<String>, ac: boolean) {
        this.id = i;
        this.firstName = f;
        this.lastName  = l;
        this.email = e;
        this.username = u;
        this.authorities = au;
        this.active = ac;
     }
}