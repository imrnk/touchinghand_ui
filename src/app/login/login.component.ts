import { AlertService } from './../utility/alert-service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../utility/auth.service';
import { UserCredentials } from '../model/usercredentials';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm : FormGroup;
  loginFormSubscription : Subscription;

  constructor(private authService : AuthenticationService, 
            private router: Router,
            private route: ActivatedRoute,
            private alertService: AlertService) { 

              console.log("login component constructor");
            }

  ngOnInit() {
    this.authService.logout();
    this.createLoginForm();
  }

  ngOnDestroy() {
    if(this.loginFormSubscription){
      this.loginFormSubscription.unsubscribe();
    }
  }

  createLoginForm() {
    console.log("creating login form ");
    this.loginForm = new FormGroup({
      'username' : new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z ]+")]),
      'password' : new FormControl(null, [Validators.required])
  });
}

  onSubmit() {
    let username = this.loginForm.get('username').value;
    let password = this.loginForm.get('password').value;
    let p  = new UserCredentials(username, password);
    this.loginFormSubscription = this.authService.login(p).subscribe(
      data => {
        this.router.navigate(['/dashboard'])
      },
    error => {this.alertService.error(error);});
  }
}
