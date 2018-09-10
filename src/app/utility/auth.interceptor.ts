import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, 
    HttpHandler, 
    HttpRequest, 
    HttpEvent, 
    HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthenticationService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public auth: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  if(request.headers.get('no-token') != 'no-token'){
    let requestHandler = this.auth.getAccessToken().flatMap(tok => {
      request = request.clone({
        setHeaders: {
          Authorization: "Bearer " + tok
        }
      });
      return next.handle(request);
    });
    return requestHandler; 
  } else {
    return next.handle(request);
  }
  }
}

/**
 * Provider POJO for the interceptor
 */
export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};