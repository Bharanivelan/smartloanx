import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required], // Username field
      password: ['', Validators.required], // Password field
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Hardcoded credentials for now
      const hardcodedUsername = 'user';
      const hardcodedPassword = 'password';

      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      // Check if credentials match
      if (username === hardcodedUsername && password === hardcodedPassword) {
        console.log('Login successful!');
        this.router.navigate(['/loan-application']); // Redirect to loan application page
      } else {
        alert('Invalid username or password');
      }
    } else {
      alert('Please fill in all required fields.');
    }
  }
}