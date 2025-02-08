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
    { id: 1, applicantName: 'John Doe', amount: 50000, status: 'Pending' },
    { id: 2, applicantName: 'Jane Smith', amount: 75000, status: 'Pending' },
    { id: 3, applicantName: 'Alice Johnson', amount: 30000, status: 'Pending' },
  ];

  constructor(private router: Router) {}

  // Method to navigate to the analytics page
  navigateToAnalytics() {
    this.router.navigate(['/dashboard/analytics']);
  }
}