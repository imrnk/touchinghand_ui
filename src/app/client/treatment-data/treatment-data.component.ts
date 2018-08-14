import { PsySession } from './../../model/psy-session';
import { TreatmentData } from './../../model/treatment-data';
import { Utility } from './../../utility/utility';
import { SessionService } from './../../sessions/session-service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-treatment-data',
  templateUrl: './treatment-data.component.html',
  styleUrls: ['./treatment-data.component.css']
})
export class TreatmentDataComponent implements OnInit, OnDestroy {

  paramSubscription : Subscription;
  param2Subscription : Subscription;
  createTreatmentDataSubscription : Subscription;
  psySession : PsySession;
  treatmentDataForm : FormGroup;
  clientId : number;
  sessionId : number;
  errorMessage: string;
  successMessage = false;
  degrees = Array.from(Array(11).keys());  
  
  constructor(private router : Router, private route: ActivatedRoute, 
    private sessionService : SessionService) { }

  ngOnInit() {
    this.createTreatmentDataForm();
    this.clientId = +this.route.snapshot.params['id'];
    this.sessionId = +this.route.snapshot.params['sid'];

    this.paramSubscription = this.route.params.subscribe(
      (params : Params) => {
        this.clientId = +params['id'];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
      }
    );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

    this.param2Subscription = this.route.params.flatMap(
      (params : Params) => {
        this.sessionId = params['sid'];
        return this.sessionService.getSession(this.sessionId);
      }
    ).subscribe(
      (psySession : PsySession) => { 
        this.psySession = psySession;
      },
      (error) => this.errorMessage = error
    );
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
    this.param2Subscription.unsubscribe();
    if(this.createTreatmentDataSubscription)
      this.createTreatmentDataSubscription.unsubscribe();
  }

  createTreatmentDataForm() {

    this.treatmentDataForm = new FormGroup ({
      'physicalComp' : new FormControl(null),
      'mentalComp' : new FormControl(null),
      'onsetDate' : new FormControl(null, Utility.validDate.bind(this)),
      'duration' : new FormControl(null),
      'degree' : new FormControl(0),
      'therapyApplied' : new FormControl(null),
      'caseHistory' : new FormControl(null),
      'psyEvaluation' : new FormControl(null),
      'labTesting' : new FormControl(null),
      'diagnosis' : new FormControl(null),
      'diffDiagnosis' : new FormControl(null),
      'formulation' : new FormControl(null),
      'clientDocLink' : new FormControl(null)
    })
  }

  onSubmit() {
    const treatmentDataObj = new TreatmentData(null, 
        this.sessionId, this.clientId, 
        this.treatmentDataForm.value['physicalComp'],
        this.treatmentDataForm.value['mentalComp'],
        this.treatmentDataForm.value['onsetDate'],
        this.treatmentDataForm.value['duration'],
        this.treatmentDataForm.value['degree'],
        this.treatmentDataForm.value['therapyApplied'],
        this.treatmentDataForm.value['caseHistory'],
        this.treatmentDataForm.value['psyEvaluation'],
        this.treatmentDataForm.value['labTesting'],
        this.treatmentDataForm.value['diagnosis'],
        this.treatmentDataForm.value['diffDiagnosis'],
        this.treatmentDataForm.value['formulation'],
        this.treatmentDataForm.value['clientDocLink']);
      
  this.createTreatmentDataSubscription = this.sessionService.createTreatmentData(treatmentDataObj).subscribe(
    (whatever : any) => {
      this.successMessage = true;
      this.onResetTreatmentDataForm();
    },
    (error) => this.errorMessage = error
  );        
  }

  onResetTreatmentDataForm() {
    this.createTreatmentDataForm();
  }
}
