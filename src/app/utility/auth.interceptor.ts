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
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getAccessToken().flatMap(t => t)}`
      }
    });

    return next.handle(request);
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