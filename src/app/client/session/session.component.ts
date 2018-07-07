import { PsySession } from './../../model/psy-session';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Utility } from '../../utility/utility';
import { SessionService } from './../../sessions/session-service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit, OnDestroy {

  clientName : string;
  updateMode = true;
  paramSubscription : Subscription;
  createSessionSubscription : Subscription;
  sessionForm : FormGroup;
  clientId : number;
  errorMessage: string;
  successMessage = false;

  constructor(private router : Router, private route: ActivatedRoute, private sessionService : SessionService) { }

  ngOnInit() {
    this.createSessionForm();
    this.clientId = +this.route.snapshot.params['id'];
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
    const sessionObj = new PsySession(null, 
      this.clientId,  
      null,
      this.sessionForm.value['sessionDate'], 
      this.sessionForm.value['followupDate'],
      this.sessionForm.value['impression'],
      this.sessionForm.value['feedback']
    );
    
    this.createSessionSubscription = this.sessionService.createSession(sessionObj).subscribe(
      (session : PsySession) => {
        this.onResetCreateSessionForm(); 
        this.router.navigate(['../'], {relativeTo:this.route});
      },
      (error) => this.errorMessage = error
    );
  }

  onResetCreateSessionForm() {
    this.createSessionForm();
  }

}
