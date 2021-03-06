import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GroupedReferenceData } from './../../model/grouped-reference-data';
import { Client } from './../../model/client';
import { TreatmentData } from './../../model/treatment-data';
import { PsySession } from './../../model/psy-session';
import { environment } from './../../../environments/environment';

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

    getTreatmentDataOfSession(sessionId: number) : Observable<TreatmentData> {
        let params = new HttpParams().set('sessionId', ''+sessionId);
        return this.httpClient.
        get<TreatmentData>(`${environment.apiUrl}${'/psy-session/treatment-data/session'}`, {params});
    }

    getTreatmentData(clientId: number) : Observable<TreatmentData> {
        let params = new HttpParams().set('clientId', ''+clientId);
        return this.httpClient.
        get<TreatmentData[]>(`${environment.apiUrl}${'/psy-session/treatment-data'}`, {params})
        .flatMap((tds : TreatmentData[]) => tds)
        .flatMap(td => Observable.of(td));
    }
    
    upcomingSessions(days: string) : Observable<Client> {
        let params = new HttpParams().set('till', days)
        return this.httpClient
        .get<Client[]>(`${environment.apiUrl}${'/clients/upcoming'}`, {params})
        .flatMap((clients : Client[]) => clients)
        .flatMap(client => Observable.of(client));
    }

    getReferenceDataByGroup(groupId : number) : Observable<GroupedReferenceData>{
        return this.httpClient.get<GroupedReferenceData[]>(`${environment.apiUrl}${'/ref-data/by-group/'}`+groupId)
        .flatMap(gData => gData);
    } 
}