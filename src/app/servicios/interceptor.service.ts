import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

    role = 'sales';
    user = 'Juan Pérez';

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
      const request = req.clone({body: {
        ...req.body, 
        role: this.role,
        user: this.user
      }})
      
      return next.handle(request)
                 .pipe(
                     //tap(res => console.log(res) )
                     catchError((err: HttpErrorResponse) => {
                        if(err.status === 403){
                          console.log(err.error.message);
                        }
                        return throwError(err)
                     })
                 )
    }

}
