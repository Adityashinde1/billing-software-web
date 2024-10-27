import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // { path: '', redirectTo: '/signup', pathMatch: 'full' },
  // { path: '**', redirectTo: '/signup' }
];