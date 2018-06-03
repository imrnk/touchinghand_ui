import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.css']
})
export class SearchClientComponent implements OnInit {

  searchClientForm : FormGroup;

  constructor() { }

  ngOnInit() : void {
    this.createSearchForm();
  }

  createSearchForm () {
    this.searchClientForm = new FormGroup({ 
      'firstName' : new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z ]+")]),
      'lastName' : new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z ]+")])
      });  
  }

  onSubmit() {
    console.log(this.searchClientForm.value);
    
  }

  onUpcomingSessions(){
    
  }

  onResetSearchForm() {
    this.createSearchForm();
  }

}
