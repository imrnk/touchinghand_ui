import { PsySession } from './../../model/psy-session';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { Client } from './../../model/client';
import { ClientsService } from '../../clients.service';
//declare var $: any;
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

  constructor(private route: ActivatedRoute, private clientsService : ClientsService) { }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
    this.clientSubscription.unsubscribe();
  }

  // openModal () {
  //   $("#clientDetailModal").modal('show');
  // }

  ngOnInit() {
    this.clientId = +this.route.snapshot.params['id'];
    this.paramSubscription = this.route.params.subscribe(
      (params : Params) => {
        this.clientId = +params['id'];
      }
    )

      this.clientSubscription = this.clientsService.findClientById(this.clientId).flatMap(
        (client) => {
          console.log('client found ', client);
          this.searchedClient = client;
          return this.clientsService.findSessionsByClientId(client.clientId);
        }
        ).subscribe(
            psySession => {
              console.log(psySession); 
              this.sessionsOfClient.push(psySession); 
              this.sessionSearchComplete = true;
            },
            (error) => this.errorMessage = error
          );
  }


}
