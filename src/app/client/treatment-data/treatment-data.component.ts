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
  templateUrl: './treatment-data.component.html'
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
  phycompLength :number;
  mencompLength :number;
  durationLength :number;
  therapyLength :number;
  caseHisLength :number;
  psyEvalLength :number;
  labLength :number;
  diagLength :number;
  diffdiagLength :number;
  formLength :number;
  linkLength :number;
  
  constructor(private router : Router, private route: ActivatedRoute, 
    private sessionService : SessionService) { }

  ngOnInit() {
    this.createTreatmentDataForm();
    this.initLengths();
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

  initLengths() {
    this.phycompLength = 200;
  this.mencompLength = 200;
  this.durationLength = 45;
  this.therapyLength = 100;
  this.caseHisLength = 450;
  this.psyEvalLength = 250;
  this.labLength = 200;
  this.diagLength = 200;
  this.diffdiagLength = 200;
  this.formLength = 200;
  this.linkLength = 100;
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

    this.onChange();
  }

  onChange() {
    this.treatmentDataForm.get('physicalComp').valueChanges.subscribe(
      val => {this.phycompLength = 200 - val.length;}
    );
    this.treatmentDataForm.get('mentalComp').valueChanges.subscribe(
      val => {this.mencompLength = 200 - val.length;}
    );
    this.treatmentDataForm.get('duration').valueChanges.subscribe(
      val => {this.durationLength = 45 - val.length;}
    );
    this.treatmentDataForm.get('therapyApplied').valueChanges.subscribe(
      val => {this.therapyLength = 100 - val.length;}
    );
    this.treatmentDataForm.get('caseHistory').valueChanges.subscribe(
      val => {this.caseHisLength = 450 - val.length;}
    );
    this.treatmentDataForm.get('psyEvaluation').valueChanges.subscribe(
      val => {this.psyEvalLength = 250 - val.length;}
    );
    this.treatmentDataForm.get('labTesting').valueChanges.subscribe(
      val => {this.labLength = 200 - val.length;}
    );
    this.treatmentDataForm.get('diagnosis').valueChanges.subscribe(
      val => {this.diagLength = 200 - val.length;}
    );
    this.treatmentDataForm.get('diffDiagnosis').valueChanges.subscribe(
      val => {this.diffdiagLength = 200 - val.length;}
    );
    this.treatmentDataForm.get('formulation').valueChanges.subscribe(
      val => {this.formLength = 200 - val.length;}
    );
    this.treatmentDataForm.get('clientDocLink').valueChanges.subscribe(
      val => {this.linkLength = 200 - val.length;}
    );

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
    this.initLengths();
  }
}
