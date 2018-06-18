import { Client } from './../../model/client';
import { ClientsService } from './../../clients.service';
import { Utility } from './../../utility/utility';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  errorMessage: string;
  successMessage = false;
  genders = ['M', 'F', 'O'];
  maritalstatuses = ['M', 'U'];
  sessionstatuses = ['Y', 'C', 'L'];
  savedClient : Client;
  
  addClientForm : FormGroup;
  constructor(private clientsService : ClientsService) { }

  ngOnInit() : void {
    this.createAddClientForm();
  }

  createAddClientForm() {
    this.addClientForm = new FormGroup({
      'firstName' : new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z ]+")]),
      'lastName' : new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z ]+")]),
      'gender' : new FormControl('M'),
      'age' :  new FormControl(null, [Validators.required, Validators.pattern("[1-9]{1}[0-9]+")]),
      'maritalStatus' : new FormControl('M'),  
      'mobile' : new FormControl(null, [Validators.required, Validators.pattern("[0-9]{10}")]),
      'profession' : new FormControl(null, Validators.pattern("[a-zA-Z -.]+")),  
      'education' : new FormControl(null, Validators.pattern("[a-zA-Z -.]+")),
      'reference' : new FormControl(null, Validators.pattern("[a-zA-Z .]+")),
      'status' : new FormControl('O'),
      'followupdate' : new FormControl(null, Utility.validDate.bind(this)),
      'address' : new FormControl(null, Validators.pattern("[0-9a-zA-Z -/\\,.]+")),
      'country' : new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z ]+")]),
      'city' : new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z ]+")]),
      'state' : new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z ]+")]),
      'pin' : new FormControl(null,  Validators.pattern("[0-9]+")),
      'email' : new FormControl(null, Validators.pattern("[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+[.][a-zA-Z]+"))
     });  
  }

  onResetAddClientForm() {
    this.createAddClientForm();
  }
  
  onSubmit() {
    console.log(this.addClientForm.value);
    this.clientsService.addClient(this.addClientForm.getRawValue()).subscribe(
      (client: Client) =>  {
        console.log(client); 
        this.savedClient = client; 
        this.onResetAddClientForm(); 
        this.successMessage = true;
      },
      (error) => this.errorMessage = error
    );
  }
}
