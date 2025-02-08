// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-loan-application',
//   templateUrl: './loan-application.component.html',
//   styleUrls: ['./loan-application.component.scss'],
// })
// export class LoanApplicationComponent {
//   loanForm: FormGroup;

//   constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
//     this.loanForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
//       loanAmount: ['', Validators.required],
//       loanTerm: ['', Validators.required],
//       interestRate: ['', Validators.required],
//       loanPurpose: ['', Validators.required],
//       gender: ['', Validators.required],
//       married: ['', Validators.required],
//       dependents: ['', Validators.required],
//       education: ['', Validators.required],
//       selfEmployed: ['', Validators.required],
//       applicantIncome: ['', Validators.required],
//       coapplicantIncome: ['', Validators.required],
//       employmentType: ['', Validators.required],
//       propertyArea: ['', Validators.required],
//       propertyValue: ['', Validators.required],
//       downPayment: ['', Validators.required],
//       ltvRatio: ['', Validators.required],
//       propertyType: ['', Validators.required],
//       creditHistory: ['', Validators.required],
//       debtToIncomeRatio: ['', Validators.required],
//     });
//   }

//   onSubmit() {
//     if (this.loanForm.valid) {
//       const formData = this.loanForm.value;

//       // Send data to backend
//       this.http.post('http://localhost:8000/predict', formData).subscribe(
//         (response) => {
//           console.log('Loan Application Response:', response);
//           alert('Loan application submitted successfully!');
//           this.router.navigate(['/loan-status']);
//         },
//         (error) => {
//           console.error('Error submitting loan application:', error);
//           alert('An error occurred while submitting the loan application.');
//         }
//       );
//     } else {
//       alert('Please fill in all required fields correctly.');
//     }
//   }
// }



// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-loan-application',
//   templateUrl: './loan-application.component.html',
//   styleUrls: ['./loan-application.component.scss'],
// })
// export class LoanApplicationComponent {
//   loanForm: FormGroup;

//   constructor(private fb: FormBuilder, private router: Router) {
//     this.loanForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
//       loanAmount: ['', Validators.required],
//       loanTerm: ['', Validators.required],
//       interestRate: ['', Validators.required],
//       loanPurpose: ['', Validators.required],
//       gender: ['', Validators.required],
//       married: ['', Validators.required],
//       dependents: ['', Validators.required],
//       education: ['', Validators.required],
//       selfEmployed: ['', Validators.required],
//       applicantIncome: ['', Validators.required],
//       coapplicantIncome: ['', Validators.required],
//       employmentType: ['', Validators.required],
//       propertyArea: ['', Validators.required],
//       propertyValue: ['', Validators.required],
//       downPayment: ['', Validators.required],
//       ltvRatio: ['', Validators.required],
//       propertyType: ['', Validators.required],
//       creditHistory: ['', Validators.required],
//       debtToIncomeRatio: ['', Validators.required],
//     });
//   }

//   onSubmit() {
//     if (this.loanForm.valid) {
//       console.log('Loan Application Data:', this.loanForm.value);

//       // Simulate navigation to the next page
//       alert('Loan application submitted successfully!');
//       this.router.navigate(['/loan-status']).then(success => {
//         if (!success) {
//           console.error("Navigation has failed!");
//         }
//       });
//     } else {
//       alert('Please fill in all required fields correctly.');
//     }
//   }
// }


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.scss'],
})
export class LoanApplicationComponent {
  loanForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loanForm = this.fb.group({
      // Personal Information
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      married: ['', Validators.required],
      dependents: ['', Validators.required],
      education: ['', Validators.required],
      selfEmployed: ['', Validators.required],
      applicantIncome: ['', Validators.required],

      // Co-Applicant Details (Conditional)
      hasCoApplicant: ['No'], // Default value is "No"
      coApplicantName: [''], // Optional unless "hasCoApplicant" is "Yes"
      coApplicantEmploymentType: [''], // Optional unless "hasCoApplicant" is "Yes"
      coApplicantIncome: [''], // Optional unless "hasCoApplicant" is "Yes"

      // Loan Details
      loanType: ['', Validators.required],
      loanAmount: ['', Validators.required],
      loanTerm: ['', Validators.required],
      locationType: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loanForm.valid) {
      console.log('Loan Application Data:', this.loanForm.value);

      // Simulate navigation to the next page
      alert('Loan application submitted successfully!');
      alert('Your Loan Referene ID : LID001');
      this.router.navigate(['/loan-status']).then(success => {
        if (!success) {
          console.error("Navigation has failed!");
        }
      });
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }

  // Helper method to check if co-applicant fields are required
  isCoApplicantRequired(): boolean {
    return this.loanForm.get('hasCoApplicant')?.value === 'Yes';
  }
}