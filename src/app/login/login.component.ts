import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../utility/auth.service';
import { UserCredentials } from '../model/usercredentials';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private authService : AuthenticationService, 
            private router: Router,
            private route: ActivatedRoute) { }

  ngOnInit() {
  }

  createLoginForm() {

    this.loginForm = new FormGroup({
      'username' : new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z ]+")]),
      'password' : new FormControl(null, [Validators.required])
  });
}

  onSubmit() {
    let username = this.loginForm.get('username').value;
    let password = this.loginForm.get('password').value;
    let p  = new UserCredentials(username, password);
    this.authService.login(p).subscribe(_ => this.router.navigate(['/dashboard']));
  }
}
