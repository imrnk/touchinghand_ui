//import { environment } from './../environments/environment.prod';
import { ClientMse } from './model/client-mse';
import { PsySession } from './model/psy-session';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';
import { Client } from './model/client';

@Injectable()
export class ClientsService {

    constructor(private httpClient: HttpClient) {}

    searchClient(f : string, l : string) : Observable<Client> {
        let params = new HttpParams().set('fname', f).set('lname', l).set('search-by', 'name');
        return this.httpClient.get<Client[]>(`${environment.apiUrl}${'/clients/search/'}`, {params})
        .flatMap(client => client);
    }

    findClientById(clientId : number) {
        let params = new HttpParams().set('id', ''+clientId).set('search-by', 'id');
        return this.httpClient.get<Client>(`${environment.apiUrl}${'/clients/search/'}`, {params})
    }

    findSessionsByClientId(clientId : number) : Observable<PsySession>{

        return this.httpClient.get(`${environment.apiUrl}${'/psy-session/'}`+clientId)
        .flatMap((sess : PsySession[]) => sess)
        .flatMap(ses => Observable.of(ses));
    }

    addClient(client : Client) : Observable<Client> {
        return this.httpClient.post<Client>(`${environment.apiUrl}${'/clients/'}`, client);
    }

    addClientMse(clientMse : ClientMse) : Observable<ClientMse> {
        return this.httpClient.post<ClientMse>(`${environment.apiUrl}${'/clients/mse/'}`+clientMse.clientId, clientMse);
    }

    findClientsWithNoSessions() : Observable<Client> {
        return this.httpClient.get<Client[]>(`${environment.apiUrl}${'/clients/no-session'}`)
        .flatMap(client => client);
    }

    findClientsCrossedFollowupDate() : Observable<Client> {
        return this.httpClient.get<Client[]>(`${environment.apiUrl}${'/clients/crossed-followup'}`)
        .flatMap(client => client);
    }
}