import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) {
    
   }

   login(data: any):Observable<any>{
     console.log('Connecting')
     return this.http.post(`${baseUrl}login`,data).pipe(catchError(this.errorHandler) )
      }
      errorHandler(error: HttpErrorResponse) {
      console.log(error.message)
      return Observable.throw(error.message || "server error.");
    }

    getAuthorizationToken():any{
      
      return localStorage.getItem('token')
    }
  }
