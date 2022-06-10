import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseLine } from './expenseline.class';

@Injectable({
  providedIn: 'root'
})
export class ExpenselineService {

  baseurl: string = "http://localhost:5192/api/expenselines"

  constructor(
    private http: HttpClient
  ) { }

  get(id: number): Observable<ExpenseLine> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<ExpenseLine>;
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }

  change(expl: ExpenseLine): Observable<any> {
    return this.http.put(`${this.baseurl}/${expl.id}`, expl) as Observable<any>;
  }

  create(expl: ExpenseLine): Observable<ExpenseLine> {
    return this.http.post(`${this.baseurl}`, expl) as Observable<ExpenseLine>;
  }
}
