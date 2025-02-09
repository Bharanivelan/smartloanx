import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Add FormsModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  totalLoansProcessed = 120;
  branchHistory = 'Excellent';

  pendingLoans = [
    { id: 1, applicantName: 'John Doe', amount: 500000, Income: 80000, AiCheck: 'Approved', status: '' },
    { id: 2, applicantName: 'Alice Johnson', amount: 300000, Income: 35000, AiCheck: 'Not Approved', status: '' },
    { id: 3, applicantName: 'Jane Smith', amount: 450000, Income: 80000, AiCheck: 'Approved', status: '' },
    { id: 4, applicantName: 'Akash', amount: 250000, Income: 75000, AiCheck: 'Approved', status: '' },
    { id: 5, applicantName: 'Smith', amount: 75000, Income: 10000, AiCheck: 'Approved', status: '' },
    { id: 6, applicantName: 'Jane', amount: 100000, Income: 12000, AiCheck: 'Approved', status: '' },
    { id: 7, applicantName: 'Hem', amount: 85000, Income: 9000, AiCheck: 'Not Approved', status: '' },
    { id: 8, applicantName: 'Appl', amount: 50000, Income: 8000, AiCheck: 'Approved', status: '' },
    { id: 9, applicantName: 'James', amount: 250000, Income: 10000, AiCheck: 'Approved', status: '' },
    { id: 10, applicantName: 'Tilak', amount: 125000, Income: 10000, AiCheck: 'Approved', status: '' },
  ];

  constructor(private router: Router) {}

  updateLoanStatus(loanId: number, newStatus: string) {
    const loan = this.pendingLoans.find((loan) => loan.id === loanId);
    if (loan) {
      loan.status = newStatus;
    }
  }

  navigateToAnalytics() {
    this.router.navigate(['/dashboard/analytics']);
  }
}


// import { Component, OnInit } from '@angular/core';

// import { LoanService } from '../../../../webui/src/app/services/loan.service';

// interface Loan {
//   _id?: string;  // MongoDB uses `_id` as default
//   id: number;
//   applicantName: string;
//   amount: number;
//   income: number;
//   status: string;
//   aiCheck: string;
// }

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//   loans: Loan[] = [];

//   constructor(private loanService: LoanService) {}

//   ngOnInit(): void {
//     this.fetchLoans();
//   }

//   fetchLoans(): void {
//     this.loanService.getLoans().subscribe(
//       (response: { loans: Loan[] }) => {
//         this.loans = response.loans;
//       },
//       (error) => {
//         console.error('Error fetching loans:', error);
//       }
//     );
//   }
// }
