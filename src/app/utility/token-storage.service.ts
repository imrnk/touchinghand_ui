import { QueryUserResult } from './../model/query-user';
import { RegistrationUser } from './../model/registration-user';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class TokenStorage {

  /**
   * Get access token
   * @returns {Observable<string>}
   */
  public getAccessToken(): Observable<string> {
    const token: string = <string>localStorage.getItem('accessToken');
    return of(token);
  }

  /**
   * Get refresh token
   * @returns {Observable<string>}
   */
  public getRefreshToken(): Observable<string> {
    const token: string = <string>localStorage.getItem('refreshToken');
    return of(token);
  }

  /**
   * Set access token
   * @returns {TokenStorage}
   */
  public setAccessToken(token: string): TokenStorage {
    localStorage.setItem('accessToken', token);

    return this;
  }

   /**
   * Set refresh token
   * @returns {TokenStorage}
   */
  public setRefreshToken(token: string): TokenStorage {
    localStorage.setItem('refreshToken', token);

    return this;
  }

  /**
   * Set the Principal user details
   * @returns {TokenStorage}
   */
  public setUserName(queryUser : QueryUserResult) {
    localStorage.setItem('userName', queryUser.firstName + " " + queryUser.lastName);
  }

/**
 * Get the authenticated User Name
 * @returns {Observable<string>}
 */

  public getUserName() : Observable<string>{
    return of(localStorage.getItem('userName'));
  }
   /**
   * Remove tokens
   */
  public clear() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userName');
  }
}