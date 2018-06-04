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
        // .catch((error : HttpErrorResponse) => {
        //     return error;
        // });
        // .map((response : Response) => {
        //     response.json();
        // });
    }
}