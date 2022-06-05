import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from './expense.class';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  baseurl: string = "http://localhost:5192/api/expenses";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Expense[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Expense[]>;
  }
  
  get(id: number): Observable<Expense> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Expense>;
  }
  
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  } 
  
  change(exp: Expense): Observable<any> {
    return this.http.put(`${this.baseurl}/${exp.id}`, exp) as Observable<any>;
  }
  
  create(exp: Expense): Observable<Expense> {
    return this.http.post(`${this.baseurl}`, exp) as Observable<Expense>;
  } 

  getApproved(): Observable<Expense[]> {
    return this.http.get(`${this.baseurl}/approved`) as Observable<Expense[]>;
  }

  approve(exp: Expense): Observable<any> {
    return this.http.put(`${this.baseurl}/approve/${exp.id}`, exp) as Observable<any>;
  }
  
  reject(exp: Expense): Observable<any> {
    return this.http.put(`${this.baseurl}/reject/${exp.id}`, exp) as Observable<any>;
  }
  
  review(exp: Expense): Observable<any> {
    return this.http.put(`${this.baseurl}/review/${exp.id}`, exp) as Observable<any>;
  }
  
  payExpense(expId: number): Observable<any> {
    return this.http.put(`${this.baseurl}/pay/${expId}`, null) as Observable<any>;
  }
}
