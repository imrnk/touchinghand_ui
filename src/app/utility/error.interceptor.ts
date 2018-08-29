import { Injectable } from '@angular/core';
import { HttpEvent, 
    HttpInterceptor, 
    HttpHandler, 
    HttpRequest, 
    HttpErrorResponse, 
    HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import 'rxjs/add/operator/catch';

/**
 * Intercepts the HTTP responses, and in case that an error/exception is thrown, handles it
 * and extract the relevant information of it.
 */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    /**
     * Intercepts an outgoing HTTP request, executes it and handles any error that could be triggered in execution.
     * @see HttpInterceptor
     * @param req the outgoing HTTP request
     * @param next a HTTP request handler
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .catch(errorResponse  => {
                let errMsg: string;
                if (errorResponse.error instanceof Error) {
                    console.log('1st block: ', errorResponse.error.message);
                    errMsg = errorResponse.error.message;
                 } else {
                    if (errorResponse.error != null) {
                        console.log('2nd block: ', errorResponse.error.responseMessage);
                        errMsg = errorResponse.error.responseMessage;                        
                    } else {
                        errMsg = 'Error Message: Internal Technical Error occured' ;
                    }
                }                
                return _throw(errMsg);
            });
    }
}

/**
 * Provider POJO for the interceptor
 */
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};