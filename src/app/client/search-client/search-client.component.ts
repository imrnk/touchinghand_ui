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
  searchedClient : Client;
  searchedUpcomingSessions : PsySession[];
  sessionDataPopulated = false;
  sessionServiceSubscription : Subscription;
  errorMessage : string;
  
  constructor(private clientsService : ClientsService) { }

  ngOnInit() : void {
    this.createSearchForm();
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

  createSearchForm () {
    this.searchClientForm = new FormGroup({ 
      'firstName' : new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z ]+")]),
      'lastName' : new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z ]+")])
      });  
  }

  onSubmit() {
    this.searchSubscription = this.clientsService.searchClient(
      this.searchClientForm.value['firstName'],
      this.searchClientForm.value['lastName']).subscribe(
        (client) => this.searchedClient = client,
        (error) => this.errorMessage = error
      );
  }

  onUpcomingSessions(){
    console.log('onUpcomingSessions called');
    this.sessionServiceSubscription = this.clientsService.findUpcomingSessions().subscribe(
      (psySessions: PsySession[]) => this.searchedUpcomingSessions = psySessions,
      (error) => this.errorMessage = error,
      () => {
        if(this.searchedUpcomingSessions) {
          this.searchedUpcomingSessions.forEach(
            (sess : PsySession) => this.clientsService.findClientById(sess.clientId).subscribe(
              (client) => sess.client = client,
              (error) => this.errorMessage = error
            )
          );
          this.sessionDataPopulated = true;
          console.log('sessionDataPopulated ', this.sessionDataPopulated);
        } 
      }
    );
    
    // if(this.searchedUpcomingSessions) {
    //   this.searchedUpcomingSessions.forEach(
        
    //     (sess : PsySession) => this.clientsService.findClientById(sess.clientId).subscribe(
    //       (client) => {this.searchedClient = client; sess.client = this.searchedClient},
    //       (error) => this.errorMessage = error
    //     )
    //   );
    //   this.sessionDataPopulated = true;
    //   console.log('sessionDataPopulated ', this.sessionDataPopulated);
    // } else {
    //   console.log('searchedUpcomingSessions ', this.searchedUpcomingSessions);
    // }
  }

  onResetSearchForm() {
    this.createSearchForm();
  }

}
