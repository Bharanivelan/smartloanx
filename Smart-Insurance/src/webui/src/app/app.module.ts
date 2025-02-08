// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
// import { LoanApplicationComponent } from './components/loan-application/loan-application.component';
// import { LoanStatusComponent } from './components/loan-status/loan-status.component';
// import { LoginComponent } from './components/login/login.component';
// import { routes } from './app.routes';
// import { HttpClientModule } from '@angular/common/http';
// import { HomeComponent } from './components/home/home.component';
// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     LoginComponent,
//     LoanApplicationComponent,
//     LoanStatusComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//    ReactiveFormsModule,
//    BrowserAnimationsModule,    
//     RouterModule.forRoot(routes),
//     HttpClientModule // Add RouterModule with routes
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoanApplicationComponent } from './components/loan-application/loan-application.component';
import { LoanStatusComponent } from './components/loan-status/loan-status.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component'; // Import NavbarComponent
import { routes } from './app.routes'; // Import routes
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LoanApplicationComponent,
    LoanStatusComponent,
    NavbarComponent // Add NavbarComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes), // Include RouterModule with routes
    HttpClientModule // Include HttpClientModule for HTTP requests
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}