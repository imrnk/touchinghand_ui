import { ClientMse } from './client-mse';
export class Client {

     clientId: number;	
     clientName: string;
     firstName: string;
     lastName: string;
     gender: string;
     age: number;
     maritalStatus: string;
     profession: string;
     education: string;
     address: string;
     city: string;
     state: string;
     pin: number;
     country: string;
     mobile: string;
     secondPhone: string;
     email: string;
     reference: string;
     status: string;
     followupdate: string;
     clientMse : ClientMse;

    constructor (
    clientId: number,	
    clientName: string,
    firstName: string,
    lastName: string,
    gender: string,
    age: number,
    maritalStatus: string,
    profession: string,
    education: string,
    address: string,
    city: string,
    state: string,
    pin: number,
    country: string,
    mobile: string,
    secondPhone: string,
    email: string,
    reference: string,
    status: string,
    followupdate: string,
    clientMse : ClientMse
    ) {
        this.clientId = clientId;	
        this.clientName = clientName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.maritalStatus = maritalStatus;
        this.profession = profession;
        this.education = education;
        this.address = address;
        this.city = city;
        this.state = state;
        this.pin = pin;
        this.country = country;
        this.mobile = mobile;
        this.secondPhone = secondPhone;
        this.email = email;
        this.reference = reference;
        this.status = status;
        this.followupdate = followupdate;
        this.clientMse = clientMse ; 
    }

    // get clientId () {return this.clientId;}	
    // get clientName () { return this.clientName;}
    // get firstName () { return this.firstName;}
    // get lastName () { return this.lastName;}
    // get gender () { return this.gender;}
    // get age () { return this.age;}
    // get maritalStatus () { return this.maritalStatus;}
    // get profession () { return this.profession;}
    // get education () { return this.education;}
    // get address () { return this.address;}
    // get city () { return this.city;}
    // get state () { return this.state;}
    // get pin () { return this.pin;}
    // get country () { return this.country;}
    // get mobile () { return this.mobile;}
    // get secondPhone () { return this.secondPhone;}
    // get email () { return this.email;}
    // get reference () { return this.reference;}
    // get status () { return this.status;}
    // get followupdate () { return this.followupdate;}
    // set followupdate(f : string) {this.followupdate = f;}
    // get clientMse () { return this.clientMse;}
    
}
