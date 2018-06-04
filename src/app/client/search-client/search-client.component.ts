import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ClientsService } from './../../clients.service';
import { Client } from './../../model/client';


@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.css']
})
export class SearchClientComponent implements OnInit, OnDestroy{

  searchClientForm : FormGroup;
  searchSubscription : Subscription;
  searchedClient : Client;
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
    
  }

  onResetSearchForm() {
    this.createSearchForm();
  }

}
