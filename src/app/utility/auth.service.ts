import { QueryUserResult } from './../model/query-user';
import { RegistrationUser } from './../model/registration-user';
import { UserCredentials } from '../model/usercredentials';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, switchMap, catchError } from 'rxjs/operators';

import { TokenStorage } from './token-storage.service';

interface AccessData {
  token: string;
}

@Injectable()
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorage
  ) {}

  /**
   * Check, if user already authorized.
   * @description Should return Observable with true or false values
   * @returns {Observable<boolean>}
   * @memberOf AuthService
   */
  public isAuthorized(): Observable < boolean > {
    return this.tokenStorage
      .getAccessToken()
      .map(token => !!token);
  }

  /**
   * Get access token
   * @description Should return access token in Observable from e.g.
   * localStorage
   * @returns {Observable<string>}
   */
  public getAccessToken(): Observable < string > {
    return this.tokenStorage.getAccessToken();
  }

  /**
   * Function, that should perform refresh token verifyTokenRequest
   * @description Should be successfully completed so interceptor
   * can execute pending requests or retry original one
   * @returns {Observable<any>}
   */
  public refreshToken(): Observable <AccessData> {
    return this.tokenStorage
      .getRefreshToken()
      .pipe(
        switchMap((refreshToken: string) =>
          this.http.get(`${environment.apiUrl}${'/auth/refresh'}`)
        ),
        tap((tokens: AccessData) => this.saveAccessData(tokens)),
        catchError((err) => {
          this.logout();
          return Observable.throw(err);
        })
      );
  }

  /**
   * Function, checks response of failed request to determine,
   * whether token be refreshed or not.
   * @description Essentialy checks status
   * @param {Response} response
   * @returns {boolean}
   */
  public refreshShouldHappen(response: HttpErrorResponse): boolean {
    return response.status === 401
  }

  /**
   * Verify that outgoing request is refresh-token,
   * so interceptor won't intercept this request
   * @param {string} url
   * @returns {boolean}
   */
  public verifyTokenRequest(url: string): boolean {
    return url.endsWith('/refresh');
  }

  /**
   * EXTRA AUTH METHODS
   */

  public login(userCredentials : UserCredentials): Observable<any> {
    let hdr = new HttpHeaders();
    this.noTokenHeader(hdr);
    return this.http.post(`${environment.apiUrl}${'/auth'}`, userCredentials, {headers: hdr})
                      .flatMap((token : AccessData) => {
                        this.saveAccessData(token);
                        this.getAuthUser();
                        return Observable.of(token);
                      });
    
  }

  private noTokenHeader(hdr : HttpHeaders) {
    
    this.isAuthorized().map(auth => { 
      if(auth){
    }else {
      hdr = hdr.append('no-token', 'no-token');
    }
  }
  
);

    //return noTokenHeader;
  }

  public register(registration : RegistrationUser): Observable<any>  {
    let hdr = new HttpHeaders();
    this.noTokenHeader(hdr);
    return this.http.post(`${environment.apiUrl}${'/auth/register'}`, registration, { headers: hdr})
    .flatMap((token : AccessData) => {
      this.saveAccessData(token);
      this.getAuthUser();
      return Observable.of(token);
    })

  //  return this.http.post(`${environment.apiUrl}${'/auth/register'}`, registration, 
  //  {headers: this.noTokenHeader()})
  //   .pipe(tap((tokens: AccessData) => this.saveAccessData(tokens)));
  }

  /**
   * Logout
   */
  public logout(): void {
    this.tokenStorage.clear();
    location.reload(true);
  }

  /**
   * Save access data in the storage
   *
   * @private
   * @param {AccessData} data
   */
  private saveAccessData({ token }: AccessData) {
    this.tokenStorage
      .setAccessToken(token)
      .setRefreshToken(token);
  }

  private getAuthUser() {
    this.http.get(`${environment.apiUrl}${'/auth/me'}`).subscribe(
      (queryUser: QueryUserResult) => this.tokenStorage.setUserName(queryUser)
    )
  }

}