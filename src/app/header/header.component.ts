import { AuthenticationService } from './../utility/auth.service';
import { TokenStorage } from './../utility/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  
  userName : string;

  constructor(private tokenStorageService : TokenStorage, private authService : AuthenticationService) { }
  
  ngOnInit() {
    this.tokenStorageService.getUserName().subscribe(
      data => this.userName = data
    );
  }

  onLogOut() {
    this.authService.logout();
  }

}
