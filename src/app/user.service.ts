import { Injectable } from '@angular/core';
import { IUserList } from './iuser-list';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, observable, Observable, throwError } from 'rxjs';
import { IApplicants } from './iapplicants';
import { IApplicationDetailed } from './iapplication-detailed';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:53047/api/user/";
  httpOptions = { headers: new HttpHeaders({'Content-type':'application/json'}) };

  constructor(private httpclient:HttpClient) { }

  getUser(id:number):Observable<any> {
    return this.httpclient.get<any>(this.url + 'ApplicantDetails/' + id).pipe(catchError(this.handleError));
  }

  getApplicationDetailed(id:number):Observable<IApplicationDetailed> {
    return this.httpclient.get<IApplicationDetailed>(this.url + 'ApplicationDetailed/' + id).pipe(catchError(this.handleError));
  }



  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    errorMessage = error.status + '\n' + error.statusText + '\n' + error.error;
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
