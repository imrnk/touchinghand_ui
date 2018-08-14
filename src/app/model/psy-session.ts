import { TreatmentData } from './treatment-data';
import { Client } from './client';
export class PsySession {

     sessionId: string;	
     clientId: number;	 
     client : Client;
     treatmentData : TreatmentData;
     sessionDate: string;
     followupDate: string;	
     impression: string;
     feedback: string;

    constructor(
     _sessionId: string,	
     _clientId: number,	 
     _client : Client,
     _treatmentData : TreatmentData,
     _sessionDate: string,	
     _followupDate: string,	
     _impression: string,	
     _feedback: string
    ) {
        this.sessionId = _sessionId;
        this.clientId = _clientId;
        this.client = _client;
        this.treatmentData = _treatmentData;
        this.sessionDate = _sessionDate;
        this.followupDate = _followupDate;
        this.impression = _impression;
        this.feedback = _feedback;
    }

    // get _sessionId () { return this.sessionId;}	
    // get _clientId () { return this.clientId;}	 
    // get _client () { return this.client;}
    // set _client (_c : Client) { console.log('setting client: ', _c);this.client = _c;}
    // get _sessionDate () { return this.sessionDate;}	
    // get _followupDate () { return this.followupDate;}	
    // get _impression () { return this.impression;}	
    // get _feedback () { return this.feedback;}

}
