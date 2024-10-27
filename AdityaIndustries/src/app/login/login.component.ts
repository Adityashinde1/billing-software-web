// src/app/login/login.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup; // Declare a FormGroup
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){}// private authService: AuthService)}

  // loginForm: any;

  ngOnInit(): void {
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        email_id: ['', Validators.required, Validators.email],
        password: ['', Validators.required]
      });
  }

  onLogin(): void {
      console.log(this.loginForm.value); // Handle form submission

      const {username, email_id, password } = this.loginForm.value;
      // Call your API for login here
      this.authService.login(username, email_id, password).subscribe(
        response => {
          alert(response.message); // Handle success
        },
        error => {
          alert(error.error.message || 'Login failed'); // Handle error
        }
      );
  }

  onSignUp(): void {
    // Logic for sign-up navigation or actions
    alert('Redirect to Sign-Up Page');
    this.router.navigate(['/signup']);
  }
}
  
