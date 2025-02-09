// // import { Injectable } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { Observable } from 'rxjs';

// // @Injectable({
// //   providedIn: 'root' // ✅ Ensures the service is available globally
// // })
// // export class LoanService {
// //   private apiUrl = 'https://dummyjson.com/c/464f-3a43-4a1e-9cab'; // Replace with actual backend URL

// //   constructor(private http: HttpClient) {}

// //   applyLoan(loanData: any): Observable<any> {
// //     return this.http.post(`${this.apiUrl}/apply-loan`, loanData);
// //   }

// //   getLoanStatus(userId: string): Observable<any> {
// //     return this.http.get(`${this.apiUrl}/loan-status/${userId}`);
// //   }

// //   calculateEMI(loanDetails: any): Observable<any> {
// //     return this.http.post(`${this.apiUrl}/calculate-emi`, loanDetails);
// //   }
// // }



// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class LoanService {
//   private loanData: any = null; // Stores Loan ID and form data
//   private loanStatus: string | null = null; // Stores the loan status

//   // Method to set loan data
//   setLoanData(data: any): void {
//     this.loanData = data;
//   }

//   // Method to get loan data
//   getLoanData(): any {
//     return this.loanData;
//   }

//   // Method to set loan status
//   setLoanStatus(status: string): void {
//     this.loanStatus = status;
//   }

//   // Method to get loan status
//   getLoanStatus(): string | null {
//     return this.loanStatus;
//   }
// }


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class LoanService {
//   private apiUrl = 'http://127.0.0.1:5000/api/loans'; // Flask API URL
//   private loanData: any = null; // Stores Loan ID and form data
//   private loanStatus: string | null = null; // Stores the loan status

//   constructor(private http: HttpClient) {}

//   // Method to fetch loans from the backend
//   fetchLoans(): Observable<any> {
//     return this.http.get<any>(this.apiUrl);
//   }

//   // Method to set loan data
//   setLoanData(data: any): void {
//     this.loanData = data;
//   }

//   // Method to get loan data
//   getLoanData(): any {
//     return this.loanData;
//   }

//   // Method to set loan status
//   setLoanStatus(status: string): void {
//     this.loanStatus = status;
//   }

//   // Method to get loan status
//   getLoanStatus(): string | null {
//     return this.loanStatus;
//   }

//   // Method to update loan status
//   updateLoanStatus(id: string, status: string): Observable<any> {
//     return this.http.put(`${this.apiUrl}/update/${id}`, { status });
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private apiUrl = 'http://127.0.0.1:5000/api'; // Flask API URL

  constructor(private http: HttpClient) {}

  // Fetch all loan applications
  getLoans(): Observable<any> {
    return this.http.get(`${this.apiUrl}/loans`);
  }

  // Predict Loan
  predictLoan(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/predict`, data);
  }

  // Update Loan Status
  updateLoanStatus(loanId: string, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/loans/update/${loanId}`, { status });
  }
}
