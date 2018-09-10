import { SessionService } from '../client/session/session-service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


import { Client } from '../model/client';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy {

  upcomingSessionsClients = new Array<Client>();
  sessionSubscription : Subscription;
  sessionSearchComplete = false;
  errorMessage : string;

  constructor(private sessionService : SessionService) { }

  ngOnInit() {
    this.sessionSubscription = this.sessionService.upcomingSessions("10").
    timeout(5000).
    subscribe(
      (client) => {
        this.upcomingSessionsClients.push(client);
        this.sessionSearchComplete = true;
      }, 
      (error) => this.errorMessage = "No upcoming sessions for now..."
    );
  }

  ngOnDestroy() {
    this.sessionSubscription.unsubscribe();
  }
}