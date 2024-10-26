import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
//   { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent },
  // { path: '', redirectTo: '/signup', pathMatch: 'full' },
  // { path: '**', redirectTo: '/signup' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
