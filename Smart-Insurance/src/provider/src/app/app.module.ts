// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyticsGraphComponent } from './analytics-graph/analytics-graph.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Ensure RouterModule is included here
    LoginComponent,
    DashboardComponent,
    AnalyticsGraphComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}