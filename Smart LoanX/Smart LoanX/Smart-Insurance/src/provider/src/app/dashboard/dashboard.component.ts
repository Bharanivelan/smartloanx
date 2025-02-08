// src/app/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule], // Add RouterModule here
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }
}