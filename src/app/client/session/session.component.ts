import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Utility } from '../../utility/utility';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  clientName = "Namaruk Pinlimas";
  updateMode = false;

  sessionForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.createSessionForm();

  }

  createSessionForm() {

    this.sessionForm = new FormGroup ({
      'sessionDate' : new FormControl(null,  [Validators.required, Utility.validDate.bind(this)]),
      'followupDate' : new FormControl(null, Utility.validDate.bind(this)),
      'impression' : new FormControl(null),
      'feedback' : new FormControl(null)
    })
  }

  onSubmit() {
    console.log(this.sessionForm.value);
  }

  onResetCreateSessionForm() {
    this.createSessionForm();
  }

}
