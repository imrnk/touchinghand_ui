import { TreatmentData } from './../../model/treatment-data';
import { SessionService } from './../../sessions/session-service';
import { ClientMse } from './../../model/client-mse';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Client } from './../../model/client';
import { PsySession } from './../../model/psy-session';
import { ClientsService } from '../../clients.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html'
})
export class ClientDetailComponent implements OnInit, OnDestroy{
  
  paramSubscription : Subscription;
  clientSubscription : Subscription;
  clientId : number;
  searchedClient : Client;
  sessionsOfClient = new Array<PsySession>();
  errorMessage : string;
  sessionSearchComplete = false;
  selectedSession : PsySession;
  selectedTreatmentData : TreatmentData;
  clientMSE : ClientMse;

  constructor(private router : Router, 
    private route: ActivatedRoute, 
    private clientsService : ClientsService,
    private sessionService : SessionService) { }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
    this.clientSubscription.unsubscribe();
  }

  ngOnInit() {
    this.clientId = +this.route.snapshot.params['id'];
    this.paramSubscription = this.route.params.subscribe(
      (params : Params) => {
        this.clientId = +params['id'];
      }
    )

      this.clientSubscription = this.clientsService.findClientById(this.clientId).
      timeout(5000).
      flatMap(
        (client) => {
          this.searchedClient = client;
          this.clientMSE = this.searchedClient.clientMse;
          return this.clientsService.findSessionsByClientId(client.clientId);
        }
        ).
        timeout(5000).
        subscribe(
            psySession => {
              this.sessionsOfClient.push(psySession); 
              this.sessionSearchComplete = true;
            },
            (error) => this.errorMessage = error
          );
       
  }

  sessionSelect(sessionId : string) {
    this.selectedSession = this.getSelectedSession(sessionId);
  }

  getSelectedSession(sessionId : string) {
    return this.sessionsOfClient.find(ps => ps.sessionId === sessionId);
  }
  
  selectTreatmentData(sessionId: string) {
   this.selectedTreatmentData = this.getSelectedSession(sessionId).treatmentData;
  }

  onNewSession() {
    this.router.navigate(['session'], {relativeTo:this.route, queryParams: {'clientName' : this.searchedClient.clientName}});
  }

  onNewMSE() {
    this.router.navigate(['mse'], {relativeTo:this.route, queryParams: {'clientName' : this.searchedClient.clientName}});
  }

  onNewTreatmentData() {
    this.router.navigate(['treatment-data'], {relativeTo:this.route, queryParams: {'clientName' : this.searchedClient.clientName}});
  }

  sort(property : any) {
    
  }
}