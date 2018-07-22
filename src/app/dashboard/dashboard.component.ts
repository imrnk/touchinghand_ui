import { PsySession } from './../model/psy-session';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SessionService } from './../sessions/session-service';
import { Client } from '../model/client';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  upcomingSessionsClients = new Array<Client>();
  sessionSubscription : Subscription;
  sessionSearchComplete = false;
  errorMessage : string;

  constructor(private sessionService : SessionService) { }

  ngOnInit() {
    this.sessionSubscription = this.sessionService.upcomingSessions("10").subscribe(
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