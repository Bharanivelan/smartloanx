import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // ✅ Ensures the service is available globally
})
export class LoanService {
  private apiUrl = 'https://dummyjson.com/c/464f-3a43-4a1e-9cab'; // Replace with actual backend URL

  constructor(private http: HttpClient) {}

  applyLoan(loanData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/apply-loan`, loanData);
  }

  getLoanStatus(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/loan-status/${userId}`);
  }

  calculateEMI(loanDetails: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/calculate-emi`, loanDetails);
  }
}
