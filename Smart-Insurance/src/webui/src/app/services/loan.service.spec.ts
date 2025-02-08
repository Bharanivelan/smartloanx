import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private apiUrl = 'https://api.example.com/loan-status'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getLoanStatus(loanId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${loanId}`);
  }
}
