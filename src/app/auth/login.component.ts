//import { AlertService } from './../utility/alert-service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../utility/auth.service';
import { UserCredentials } from '../model/usercredentials';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm : FormGroup;
  loginFormSubscription : Subscription;
  errorMessage : string;
  
  constructor(private authService : AuthenticationService, 
            private router: Router,
            private route: ActivatedRoute
          //  private alertService: AlertService
          ) { }

  ngOnInit() {
    //this.authService.logout();
    this.createLoginForm();
  }

  ngOnDestroy() {
    if(this.loginFormSubscription){
      this.loginFormSubscription.unsubscribe();
    }
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      'username' : new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+[.][a-zA-Z]+")]),
      'password' : new FormControl(null, [Validators.required])
  });
}

  onSubmit() {
    let username = this.loginForm.get('username').value;
    let password = btoa(this.loginForm.get('password').value);
    let p  = new UserCredentials(username, password);                                                               
    this.loginFormSubscription = this.authService.login(p).subscribe(                                                               
      user => {
        this.router.navigate(['/dashboard'])
      },
    error => {
      this.errorMessage = error
    }
    );
  }
}
