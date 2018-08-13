import { Client } from './../model/client';
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { GroupedReferenceData } from './../model/grouped-reference-data';
import { PsySession } from './../model/psy-session';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { TreatmentData } from '../model/treatment-data';

@Injectable()
export class SessionService {

    constructor(private httpClient: HttpClient) {}

    createSession(session : PsySession) : Observable<Number> {
        return this.httpClient.post<Number>(`${environment.apiUrl}${'/psy-session/'}`, session);
    }

    getSession(sessionId : number) : Observable<PsySession> {
        let params = new HttpParams().set('sessionId', ''+sessionId);
        return this.httpClient.get<PsySession>(`${environment.apiUrl}${'/psy-session/'}`, {params});
    }

    createTreatmentData(treatmentData : TreatmentData) {
        return this.httpClient.post<any>(`${environment.apiUrl}${'/psy-session/treatment-data'}`, treatmentData);
    }
    
    upcomingSessions(days: string) : Observable<Client> {
        let params = new HttpParams().set('till', days)
        return this.httpClient
        .get<Client[]>(`${environment.apiUrl}${'/clients/upcoming'}`, {params})
        .flatMap((client : Client[]) => client);
    }

    getReferenceDataByGroup(groupId : number) : Observable<GroupedReferenceData>{
        return this.httpClient.get<GroupedReferenceData[]>(`${environment.apiUrl}${'/ref-data/by-group/'}`+groupId)
        .flatMap(gData => gData);
    } 
}