import { ClientMse } from './client-mse';
export class Client {

    private _clientId: number;	
    private _clientName: string;
    private _firstName: string;
    private _lastName: string;
    private _gender: string;
    private _age: string;
    private _maritalStatus: string;
    private _profession: string;
    private _education: string;
    private _address: string;
    private _city: string;
    private _state: string;
    private _pin: number;
    private _country: string;
    private _mobile: string;
    private _secondPhone: string;
    private _email: string;
    private _reference: string;
    private _status: string;
    private _followupdate: string;
    private _clientMse : ClientMse;

    constructor (
    clientId: number,	
    clientName: string,
    firstName: string,
    lastName: string,
    gender: string,
    age: string,
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
        this._clientId = clientId;	
        this._clientName = clientName;
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
        this._maritalStatus = maritalStatus;
        this._profession = profession;
        this._education = education;
        this._address = address;
        this._city = city;
        this._state = state;
        this._pin = pin;
        this._country = country;
        this._mobile = mobile;
        this._secondPhone = secondPhone;
        this._email = email;
        this._reference = reference;
        this._status = status;
        this._followupdate = followupdate;
        this._clientMse = clientMse ; 
    }

    get clientId () {return this._clientId;}	
    get clientName () { return this._clientName;}
    get firstName () { return this._firstName;}
    get lastName () { return this._lastName;}
    get gender () { return this._gender;}
    get age () { return this._age;}
    get maritalStatus () { return this._maritalStatus;}
    get profession () { return this._profession;}
    get education () { return this._education;}
    get address () { return this._address;}
    get city () { return this._city;}
    get state () { return this._state;}
    get pin () { return this._pin;}
    get country () { return this._country;}
    get mobile () { return this._mobile;}
    get secondPhone () { return this._secondPhone;}
    get email () { return this._email;}
    get reference () { return this._reference;}
    get status () { return this._status;}
    get followupdate () { return this._followupdate;}
    set followupdate(f : string) {this._followupdate = f;}
    get clientMse () { return this._clientMse;}
    
}
