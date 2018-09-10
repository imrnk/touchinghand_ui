import { AuthenticationService } from './utility/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  
  authSubscription : Subscription;
  authorized = false;

  constructor(private authService : AuthenticationService) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.isAuthorized().subscribe(
      (au: boolean) => {
        this.authorized = au;
      }
    );
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
