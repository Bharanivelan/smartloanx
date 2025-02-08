// import { Component, OnInit } from '@angular/core';
// import { LoanService } from '../../services/loan.service';
// import { NgModel } from '@angular/forms';
// @Component({
//   selector: 'app-loan-status',
//   templateUrl: './loan-status.component.html',
//   styleUrls: ['./loan-status.component.scss']
// })
// export class LoanStatusComponent implements OnInit {
//   loanStatus: any = null;
//   loading: boolean = false;
//   error: string = '';
//   loanId: string = '';

//   constructor(private loanService: LoanService) {}

//   ngOnInit(): void {}

//   checkLoanStatus() {
//     if (!this.loanId) {
//       this.error = 'Please enter a valid Loan Reference ID';
//       return;
//     }

//     this.loading = true;
//     this.error = '';

//     this.loanService.getLoanStatus(this.loanId).subscribe(
//       (response) => {
//         this.loanStatus = response;
//         this.loading = false;
//       },
//       (error) => {
//         this.error = 'Failed to fetch loan status. Please try again later.';
//         this.loading = false;
//       }
//     );
//   }
// }
import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../services/loan.service';

@Component({
  selector: 'app-loan-status',
  templateUrl: './loan-status.component.html',
  styleUrls: ['./loan-status.component.scss'],
})
export class LoanStatusComponent implements OnInit {
  loanStatus: any = null;
  loading = false;
  error = '';
  loanId = '';

  constructor(private loanService: LoanService) {}

  ngOnInit(): void {}

  checkLoanStatus() {
    if (!this.loanId) {
      this.error = 'Please enter a valid Loan Reference ID';
      return;
    }

    this.loading = true;
    this.error = '';

    this.loanService.getLoanStatus(this.loanId).subscribe(
      (response) => {
        this.loanStatus = response;
        this.loading = false;
      },
      (error) => {
        this.error = 'Failed to fetch loan status. Please try again later.';
        this.loading = false;
      }
    );
  }
}
