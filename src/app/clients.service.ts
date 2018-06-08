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

    searchClient(f : string, l : string) {
        let params = new HttpParams().set('fname', f).set('lname', l).set('search-by', 'name');
        return this.httpClient.get<Client>(`${environment.apiUrl}${'/clients/search/'}`, {params})
    }

    findUpcomingSessions() {
        return this.httpClient.get<PsySession[]>(`${environment.apiUrl}${'/psy-session/upcoming/'}`);
    }

    findClientById(clientId : number) {
        let params = new HttpParams().set('id', ''+clientId).set('search-by', 'id');
        return this.httpClient.get<Client>(`${environment.apiUrl}${'/clients/search/'}`, {params})
    }
}