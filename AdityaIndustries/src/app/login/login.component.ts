// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // import { AuthService } from '../auth.service';
// import { OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit{
  
//   constructor(private fb: FormBuilder){// private authService: AuthService) {
    
//   }
//   // loginForm: FormGroup;

//   ngOnInit() {
//     // this.loginForm = this.fb.group({
//     //   username: ['', Validators.required],
//     //   password: ['', Validators.required]
//     // });
//   }

//   onSubmit() {
//     // if (this.loginForm.valid) {
//     //   this.authService.login(this.loginForm.value).subscribe({
//     //     next: (res) => {
//     //       console.log('Logged in successfully:', res);
//     //     },
//     //     error: (err) => {
//     //       console.error('Login failed:', err);
//     //     }
//     //   });
//     // }
//   }
// }
// src/app/login/login.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup; // Declare a FormGroup
  constructor(private fb: FormBuilder, private authService: AuthService){}// private authService: AuthService)}

  // loginForm: any;

  ngOnInit(): void {
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        email_id: ['', Validators.required, Validators.email],
        password: ['', Validators.required]
      });
  }

  onLogin(): void {
    console.log("in login")
    if (this.loginForm.valid) {
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
    } else {
      alert('Form is invalid. Please check the entered values.'); // Handle invalid form
    }
  }

  onSignUp(): void {
    // Logic for sign-up navigation or actions
    alert('Redirect to Sign-Up Page');
  }
}
  
