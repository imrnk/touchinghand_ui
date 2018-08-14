
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Client } from './../../model/client';
import { ClientsService } from '../../clients.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit, OnDestroy {

  clientsWithNoSession = new Array<Client>();
  clientsCrossedFollowup = new Array<Client>();
  errorMessageNoSession = "Nothing yet.";
  errorMessageCrossedFollowup = "Nothing yet.";
  clientsNoSessionSubscription : Subscription;
  clientsCrossedFollowupDateSubscription : Subscription;
  noSessionClientFound = false;
  crossedFollowupClientFound = false;
  
  constructor(private clientService : ClientsService) {}

  ngOnInit() {
    this.clientsNoSessionSubscription = this.clientService.findClientsWithNoSessions().
    timeout(5000).
    subscribe(
      c => {
        this.clientsWithNoSession.push(c);
        this.noSessionClientFound = true;
      },
      (error) => {
        this.errorMessageNoSession = "Nothing yet.";
        console.log(error);
      }
    );

    this.clientsCrossedFollowupDateSubscription = this.clientService.findClientsCrossedFollowupDate().
    timeout(5000).
    subscribe(
      c => {
        this.clientsCrossedFollowup.push(c);
        this.crossedFollowupClientFound = true;
      },
      (error) => {
        this.errorMessageCrossedFollowup = "Nothing yet.";
        console.log(error);
      }
    )
  }

  ngOnDestroy () {
    this.clientsNoSessionSubscription.unsubscribe();
    this.clientsCrossedFollowupDateSubscription.unsubscribe();
  }
}
