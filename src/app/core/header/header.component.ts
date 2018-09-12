import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../utility/auth.service';
import { TokenStorage } from '../../utility/token-storage.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
 
  usernameSubscription : Subscription;
  userName : string;

  constructor(private tokenStorageService : TokenStorage, private authService : AuthenticationService) { }
  
  ngOnInit() {
  
    this.authService.getLoggedInName.subscribe(name => {
      if(!this.userName) {
        this.userName = name;
      }
    });

    this.usernameSubscription = this.tokenStorageService.getUserName().subscribe(
      data => {
        if(!this.userName){
          this.userName = data;
        }
      }
    );

    
  }

  ngOnDestroy(): void {
    this.usernameSubscription.unsubscribe();

  }

  onLogOut() {
    this.authService.logout();
  }

}
