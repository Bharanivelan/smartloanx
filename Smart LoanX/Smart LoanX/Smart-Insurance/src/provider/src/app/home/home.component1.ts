// src/app/dashboard/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // Hardcoded data
  totalLoansProcessed = 120; // Total loans processed
  branchHistory = 'Excellent'; // Branch performance history

  // Simulated pending loans data
  pendingLoans = [
    { id: 1, applicantName: 'John Doe', amount: 500000, Income: 80000, status: 'Pending',AiCheck: 'Approved' },
    { id: 2, applicantName: 'Alice Johnson', amount: 300000,Income: 35000, status: 'Pending',AiCheck: 'Not Approved' },
    { id: 3, applicantName: 'Jane Smith', amount: 450000,Income: 80000, status: 'Pending',AiCheck: 'Approved' },
    { id: 4, applicantName: 'akash', amount: 250000,Income: 75000, status: 'Pending',AiCheck: 'Approved' },
    { id: 5, applicantName: 'Smith', amount: 75000,Income: 10000, status: 'Pending',AiCheck: 'Approved' },
    { id: 6, applicantName: 'Jane', amount: 100000,Income: 12000, status: 'Pending',AiCheck: 'Approved' },
    { id: 7, applicantName: 'Hem', amount: 85000,Income: 9000, status: 'Pending',AiCheck: 'Not Approved' },
    { id: 8, applicantName: 'appl', amount: 50000,Income: 8000, status: 'Pending',AiCheck: 'Approved' },
    { id: 9, applicantName: 'james', amount: 250000,Income: 10000, status: 'Pending',AiCheck: 'Approved' },
    { id: 10, applicantName: 'tilak', amount: 125000,Income: 10000, status: 'Pending',AiCheck: 'Approved' },
  ];

  constructor(private router: Router) {}

  // Method to navigate to the analytics page
  navigateToAnalytics() {
    this.router.navigate(['/dashboard/analytics']);
  }
}