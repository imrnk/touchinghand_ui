//import { AlertService } from './../../utility/alert-service';
import { RegistrationUser } from './../../model/registration-user';
import { AuthenticationService } from './../../utility/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  registrationForm : FormGroup;
  errorMessage : string;

  constructor(private authService : AuthenticationService, 
            private router: Router,
            private route: ActivatedRoute,
           // private alertService : AlertService
          ) { }

  ngOnInit() {
    this.createRegistrationForm();
  }

  createRegistrationForm() {

    this.registrationForm = new FormGroup({
      'firstName' : new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z ]+")]),
      'lastName' : new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z ]+")]),
      'email' : new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+[.][a-zA-Z]+")]),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(6)])
  });
}

  onSubmit() {
    let firstName = this.registrationForm.get('firstName').value; 
    let lastName = this.registrationForm.get('lastName').value; 
    let username = this.registrationForm.get('email').value;
    let password = btoa(this.registrationForm.get('password').value);
    let regUser  = new RegistrationUser(username, password, firstName, lastName);
    this.authService.register(regUser).subscribe(
      data => {
       // this.alertService.success('Registration successful', true);
        this.router.navigate(['/login'])
      },
      error => {
        console.log(error);
        this.errorMessage = error;
        //this.alertService.error(error);
      }
    );
  }

  onReset() {
    this.createRegistrationForm();
  }
}
