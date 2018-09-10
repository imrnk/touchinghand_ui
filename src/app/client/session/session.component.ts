import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Utility } from '../../utility/utility';
import { PsySession } from './../../model/psy-session';
import { SessionService } from './session-service';


@Component({
  selector: 'app-session',
  templateUrl: './session.component.html'
})
export class SessionComponent implements OnInit, OnDestroy {

  clientName : string;
  updateMode = true;
  paramSubscription : Subscription;
  createSessionSubscription : Subscription;
  feedbackFieldSubscription : Subscription;
  impressionFieldSubscription : Subscription;
  sessionForm : FormGroup;
  clientId : number;
  errorMessage: string;
  successMessage = false;
  treatmentDataLink :string;
  savedSessionId : Number;
  imprLength = 500;
  feedbackLength = 1000;

  constructor(private router : Router, private route: ActivatedRoute, 
    private sessionService : SessionService) { }

  ngOnInit() {
    this.createSessionForm();
    this.clientId = +this.route.snapshot.params['id'];

    this.clientName = this.route.snapshot.queryParamMap.get('clientName');

    this.paramSubscription = this.route.params.subscribe(
      (params : Params) => {
        this.clientId = +params['id'];
      }
    );
  }

  ngOnDestroy () {
    this.paramSubscription.unsubscribe();
    if(this.createSessionSubscription) {
    this.createSessionSubscription.unsubscribe();
    }
    if(this.impressionFieldSubscription){
      this.impressionFieldSubscription.unsubscribe();
    }
    if(this.feedbackFieldSubscription) {
      this.feedbackFieldSubscription.unsubscribe();
    }
  }

  createSessionForm() {

    this.sessionForm = new FormGroup ({
      'sessionDate' : new FormControl(null,  [Validators.required, Utility.validDate.bind(this)]),
      'followupDate' : new FormControl(null, Utility.validDate.bind(this)),
      'impression' : new FormControl(null),
      'feedback' : new FormControl(null)
    });
    
    this.onChange();
  }

  onChange() {
    this.impressionFieldSubscription = this.sessionForm.get('impression').valueChanges.subscribe(
      val => {this.imprLength = 500 - val.length;}
    );

    this.feedbackFieldSubscription = this.sessionForm.get('feedback').valueChanges.subscribe(
      val => {this.feedbackLength = 1000 - val.length;}
    );
  
  }

  onSubmit() {
    const sessionObj = new PsySession(null, 
      this.clientId,  
      null,
      null,
      this.sessionForm.value['sessionDate'], 
      this.sessionForm.value['followupDate'],
      this.sessionForm.value['impression'],
      this.sessionForm.value['feedback']
    );
    
    this.createSessionSubscription = this.sessionService.createSession(sessionObj).subscribe(
      (sessionId : Number) => {
        this.savedSessionId = sessionId;
        this.onResetCreateSessionForm();         
        this.treatmentDataLink = this.savedSessionId+'/treatment-data';
        this.successMessage = true;
      },
      (error) => this.errorMessage = error
      
    );
  }

  onResetCreateSessionForm() {
    this.createSessionForm();
    this.imprLength = 500;
    this.feedbackLength = 1000;
  }

}