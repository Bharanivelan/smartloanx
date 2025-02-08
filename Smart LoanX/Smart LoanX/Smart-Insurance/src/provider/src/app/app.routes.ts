// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyticsGraphComponent } from './analytics-graph/analytics-graph.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent, // Parent route renders the layout
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default child route
      { path: 'home', component: HomeComponent }, // Home route renders HomeComponent
      { path: 'analytics', component: AnalyticsGraphComponent }, // Analytics route
    ],
  },
];