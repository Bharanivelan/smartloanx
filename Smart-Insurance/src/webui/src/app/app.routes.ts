// import { Routes } from '@angular/router';
// import { LoanApplicationComponent } from './components/loan-application/loan-application.component';
// import { LoanStatusComponent } from './components/loan-status/loan-status.component';

// export const routes: Routes = [
//   { path: '', redirectTo: 'loan-application', pathMatch: 'full' },
//   { path: 'loan-application', component: LoanApplicationComponent },
//   { path: 'loan-status', component: LoanStatusComponent },
// ];
// import { Routes } from '@angular/router';
// import { LoanApplicationComponent } from './components/loan-application/loan-application.component';
// import { LoanStatusComponent } from './components/loan-status/loan-status.component';
// import { LoginComponent } from './components/login/login.component';

// export const routes: Routes = [
//   { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
//   { path: 'login', component: LoginComponent },
//   { path: 'loan-application', component: LoanApplicationComponent },
//   { path: 'loan-status', component: LoanStatusComponent },
// ];


// import { Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component'; // Import the HomeComponent
// import { LoanApplicationComponent } from './components/loan-application/loan-application.component';
// import { LoanStatusComponent } from './components/loan-status/loan-status.component';
// import { LoginComponent } from './components/login/login.component';

// export const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route redirects to homepage
//   { path: 'home', component: HomeComponent }, // Homepage route
//   { path: 'login', component: LoginComponent }, // Login route
//   { path: 'loan-application', component: LoanApplicationComponent }, // Loan application route
//   { path: 'loan-status', component: LoanStatusComponent }, // Loan status route
// ];

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; // Import the HomeComponent
import { LoanApplicationComponent } from './components/loan-application/loan-application.component';
import { LoanStatusComponent } from './components/loan-status/loan-status.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route redirects to homepage
  { path: 'home', component: HomeComponent }, // Homepage route
  { path: 'login', component: LoginComponent }, // Login route
  { path: 'loan-application', component: LoanApplicationComponent }, // Loan application route
  { path: 'loan-status', component: LoanStatusComponent }, // Loan status route
];