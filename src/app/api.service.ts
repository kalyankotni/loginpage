import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Cases } from './data.model';
// import { Statistic } from './statistic';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = '/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/user-portal/users';

  getUsers() {
    return this.http.get<Cases[]>(this.baseUrl);
  }
}
