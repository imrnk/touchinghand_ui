import { SessionService } from './../../sessions/session-service';
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
  searchedClients = new Array<Client>();
  searchedUpcomingFollowUpDateOfClients = new Array<Client>();
  clientSearchResultFound = false;
  sessionSearchComplete = false;
  sessionServiceSubscription : Subscription;
  errorMessage : string;
  
  constructor(private clientsService : ClientsService, private sessionService : SessionService) { }

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
    this.searchedClients.splice(0);
    this.clientSearchResultFound = false;
    this.sessionSearchComplete = false;
    this.errorMessage = null;
  }

  createSearchForm () {
    this.searchClientForm = new FormGroup({ 
      'firstName' : new FormControl(null, [ Validators.pattern("[a-zA-Z ]+")]),
      'lastName' : new FormControl(null,  [ Validators.pattern("[a-zA-Z ]+")])
      }, this.validateForm);  
  }


  validateForm(searchForm : FormGroup) : {[key: string]: any} {
    if((searchForm.value['firstName'] === null) && (searchForm.value['lastName'] === null)
    || (searchForm.value['firstName'] === '' && (searchForm.value['lastName'] === ''))){
      return {'atleastOne' : true};
    }
    return null;
  }

  onSubmit() {
    this.onresetSearch();
    let fname = this.searchClientForm.value['firstName'] ? this.searchClientForm.value['firstName'] : '';
    let lname = this.searchClientForm.value['lastName'] ? this.searchClientForm.value['lastName'] : '';
    this.searchSubscription = this.clientsService.searchClient(
      fname,
      lname).subscribe(
        (client) => {this.searchedClients.push(client); this.clientSearchResultFound = true;},
        (error) => this.errorMessage = error
        
      );
  }


  onUpcomingSessions(){
    this.onresetSearch();
    this.searchedUpcomingFollowUpDateOfClients.splice(0,this.searchedUpcomingFollowUpDateOfClients.length);
    this.sessionSubscription = this.sessionService.upcomingSessions('10').subscribe(
      client => {
        this.searchedUpcomingFollowUpDateOfClients.push(client);
        this.sessionSearchComplete = true;
        //return this.clientsService.findClientById(session.clientId);
       },
       (error) => this.errorMessage = error
    );
    
    //.subscribe(
    //   client => {
    //     this.searchedUpcomingSessions
    //       .filter(s => s.clientId === client.clientId)
    //       .map( s => s.client = client);
    //       this.sessionSearchComplete = true;
    //   },
    //   (error) => this.errorMessage = error
    // );
  }

  onResetSearchForm() {
    this.unsubscribe();
    this.createSearchForm();
  }

}
