import { AuthenticationService } from './utility/auth.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
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

    this.authService.getLoggedInName.subscribe(emitted => {
      if(!this.authorized) {
        this.authorized = true;
      }
    });

    this.authSubscription = this.authService.isAuthorized().subscribe(
      (au: boolean) => {
        if(!this.authorized)
          this.authorized = au;
        //location.reload();
      }
    );

    
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
