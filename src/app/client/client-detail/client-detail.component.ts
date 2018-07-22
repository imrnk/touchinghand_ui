import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Client } from './../../model/client';
import { PsySession } from './../../model/psy-session';
import { ClientsService } from '../../clients.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
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

  constructor(private router : Router, private route: ActivatedRoute, private clientsService : ClientsService) { }

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

      this.clientSubscription = this.clientsService.findClientById(this.clientId).flatMap(
        (client) => {
          this.searchedClient = client;
          return this.clientsService.findSessionsByClientId(client.clientId);
        }
        ).subscribe(
            psySession => {
              this.sessionsOfClient.push(psySession); 
              this.sessionSearchComplete = true;
            },
            (error) => this.errorMessage = error
          );
       
  }

  sessionSelect(sessionId : string) {
    this.selectedSession = this.sessionsOfClient.filter(ps => ps.sessionId === sessionId)[0];
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