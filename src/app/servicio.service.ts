import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/Http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {ContactForm}  from 'src/app/models/contactForm';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
'Authorization': "Bearer " + localStorage.getItem('token')

  })
};
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor( private http : HttpClient) { }

getRepos(): Observable<any> {

 return this.http.get('http://localhost:8080/laravel8/public/api/userIndex', httpOptions) ;
}

addProject(hero: ContactForm): Observable<ContactForm> {
  return this.http.post<ContactForm>('http://localhost:8080/laravel8/public/api/x', hero, httpOptions)
    .pipe(
       catchError(error => {
      console.log(throwError(error))
      return throwError(error);
    }));
}
}
