import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FormsModule } from '@angular/forms';
// import { SignupComponent } from './signup/signup.component'; // Import Signup component
import { LoginComponent } from './login/login.component';   // Import Login component
import { NavigationError, NavigationStart, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // SignupComponent,  // Declare SignupComponent
    LoginComponent    // Declare LoginComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // router.events.subscribe(event => {
    //   if (event instanceof NavigationStart) {
    //     console.log('NavigationStart:', event.url);
    //   } else if (event instanceof NavigationError) {
    //     console.error('NavigationError:', event.error);
    //   }
    // })
  }
 }
