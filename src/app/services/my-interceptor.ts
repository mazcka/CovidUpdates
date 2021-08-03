import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const newReq = req.clone({
            headers: new HttpHeaders({
                'x-rapidapi-key': 'ea7051fcbemsh5279dea71af4e85p17560djsn2fdc9a17bb87',
                'x-rapidapi-host': 'covid-193.p.rapidapi.com'
            })
        });

        return next.handle(newReq);
    }
}