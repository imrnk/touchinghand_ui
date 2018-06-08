import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { Client } from './../../model/client';
import { ClientsService } from '../../clients.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit, OnDestroy{
  
  paramSubscription : Subscription;
  clientId : number;
  searchedClient : Client;

  constructor(private route: ActivatedRoute, private clientsService : ClientsService) { }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

  ngOnInit() {
    this.clientId = +this.route.snapshot.params['id'];
    this.paramSubscription = this.route.params.subscribe(
      (params : Params) => {
        this.clientId = +params['id'];
      }
    )

      this.clientsService.findClientById(this.clientId).subscribe(
        (client) => this.searchedClient = client
      );

  }


}
