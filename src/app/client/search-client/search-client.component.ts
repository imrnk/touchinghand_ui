import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ClientsService } from './../../clients.service';
import { Client } from './../../model/client';
import { PsySession } from '../../model/psy-session';


@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.css']
})
export class SearchClientComponent implements OnInit, OnDestroy{

  searchClientForm : FormGroup;
  searchSubscription : Subscription;
  sessionSubscription : Subscription;
  searchedClient : Client;
  searchedUpcomingSessions = new Array<PsySession>();
  clientSearchComplete = false;
  sessionSearchComplete = false;
  sessionServiceSubscription : Subscription;
  errorMessage : string;
  
  constructor(private clientsService : ClientsService) { }

  ngOnInit() : void {
    this.createSearchForm();
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  unsubscribe() {
    if(this.searchSubscription)
      this.searchSubscription.unsubscribe();
    if(this.sessionSubscription)  
      this.sessionSubscription.unsubscribe();
  }

  onresetSearch () {
    this.unsubscribe();
    this.clientSearchComplete = false;
    this.sessionSearchComplete = false;
  }

  createSearchForm () {
    this.searchClientForm = new FormGroup({ 
      'firstName' : new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z ]+")]),
      'lastName' : new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z ]+")])
      });  
  }

  onSubmit() {
    this.onresetSearch();
    this.searchSubscription = this.clientsService.searchClient(
      this.searchClientForm.value['firstName'],
      this.searchClientForm.value['lastName']).subscribe(
        (client) => {this.searchedClient = client; this.clientSearchComplete = true;},
        (error) => this.errorMessage = error
        
      );
  }

  onUpcomingSessions(){
    this.onresetSearch();
    this.searchedUpcomingSessions.splice(0,this.searchedUpcomingSessions.length);
    this.sessionSubscription = this.clientsService.findUpcomingSessions()
    .flatMap(session => {
      this.searchedUpcomingSessions.push(session);
      return this.clientsService.findClientById(session.clientId);
    }).subscribe(
      client => {
        this.searchedUpcomingSessions
          .filter(s => s.clientId === client.clientId)
          .map( s => s.client = client);
          this.sessionSearchComplete = true;
      },
      (error) => this.errorMessage = error
    );
  }

  onResetSearchForm() {
    this.unsubscribe();
    this.createSearchForm();
  }

}
