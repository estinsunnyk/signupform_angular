import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';
import { Sigunp } from '../../../shared/interfaces/signup.interface';

@Injectable({
   providedIn: 'root'
})
export class SignupService {

   constructor(private http: HttpClient) { }

   signUp(reqData: Sigunp): Observable<any[]> {
      // Used mocky service for creating mock url
      const signUpUrl = 'https://run.mocky.io/v3/f2e2fb5b-fef4-4a08-bd11-36629751f5e2';
      return this.http.post<any[]>(`${signUpUrl}/`, reqData);
      // .pipe(
      //    catchError(this.errorHandler<any>())
      // );
   }
}
