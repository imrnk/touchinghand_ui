import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { environment } from './../../environments/environment';

@Injectable()
export class ClientService {

    constructor(private httpClient: HttpClient) {}

    searchClient(f : string, l : string) {
        let params = new HttpParams().set('fname', f).append('lname', l).append('search-by', 'name');
        return this.httpClient.get(environment.apiUrl + '/clients/search/', {params})
        .map((response : Response) => {
            response.json();
        }).catch(
            (error: Response) => {
              return Observable.throw(error.json());
            }
          );;
    }
}