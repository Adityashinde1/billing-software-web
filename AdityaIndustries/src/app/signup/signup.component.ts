// src/app/login/login.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  SignupForm!: FormGroup; // Declare a FormGroup
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){}// private authService: AuthService)}

  // loginForm: any;

  ngOnInit(): void {
      this.SignupForm = this.fb.group({
        username: ['', Validators.required],
        email_id: ['', Validators.required, Validators.email],
        password: ['', Validators.required]
      });
  }

  onSignUp(): void {
    // Logic for sign-up navigation or actions
    // alert('Redirect to Sign-Up Page');

    console.log(this.SignupForm.value); // Handle form submission

      const {username, email_id, password } = this.SignupForm.value;
      // Call your API for login here
      this.authService.signup(username, email_id, password).subscribe(
        response => {
          this.router.navigate(['/login']);
        },
        error => {
          // alert(error.error.message || 'Sign up failed'); // Handle error
        }
      );
  }
}
  
