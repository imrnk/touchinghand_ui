import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { GroupedReferenceData } from './../model/grouped-reference-data';
import { PsySession } from './../model/psy-session';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";

@Injectable()
export class SessionService {

    constructor(private httpClient: HttpClient) {}

    createSession(session : PsySession) {
        return this.httpClient.post<PsySession>(`${environment.apiUrl}${'//psy-session/'}`, session);
    }

    upcomingSessions(days: string) : Observable<PsySession> {
        let params = new HttpParams().set('till', days)
        return this.httpClient
        .get<PsySession[]>(`${environment.apiUrl}${'/psy-session/upcoming'}`, {params})
        .flatMap((sess : PsySession[]) => sess);
        
    }
    
    getReferenceDataByGroup(groupId : number) : Observable<GroupedReferenceData>{
        return this.httpClient.get<GroupedReferenceData[]>(`${environment.apiUrl}${'/ref-data/by-group/'}`+groupId)
        .flatMap(gData => gData);
    } 
}