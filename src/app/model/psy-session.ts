import { Client } from './client';
export class PsySession {

    private _sessionId: string;	
    private _clientId: string;	 
    private _client : Client;
    private _sessionDate: string;
    private _followupDate: string;	
    private _impression: string;
    private _feedback: string;

    constructor(
     sessionId: string,	
     clientId: string,	 
     client : Client,
     sessionDate: string,	
     followupDate: string,	
     impression: string,	
     feedback: string
    ) {}

    get sessionId () { return this._sessionId;}	
    get clientId () { return this._clientId;}	 
    get client () { return this._client;}
    set client (_c : Client) { this.client = _c;}
    get sessionDate () { return this._sessionDate;}	
    get followupDate () { return this._followupDate;}	
    get impression () { return this._impression;}	
    get feedback () { return this._feedback;}

}
