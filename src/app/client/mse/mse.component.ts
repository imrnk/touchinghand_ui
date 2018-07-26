import { ClientsService } from './../../clients.service';
import { SortPipe } from './../../pipes/sort.pipe';
import { ClientMse } from './../../model/client-mse';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, NgForm } from '@angular/forms';
import { SessionService } from './../../sessions/session-service';
import { GroupedReferenceData } from '../../model/grouped-reference-data';

@Component({
  selector: 'app-mse',
  templateUrl: './mse.component.html',
  styleUrls: ['./mse.component.css']
})
export class MseComponent implements OnInit, OnDestroy {

  @ViewChild('f') mseForm : NgForm;
  clientName : string;
  clientId : number;
  errorMessage: string;
  successMessage = false;
  refDataSubscription : Subscription;
  submitFormSubscription : Subscription;
  groupedDataComplete = false;
  groupdataArr = new Array<GroupedReferenceData>();
  otherComments: string[] = new Array<string>();
  clientMse = new ClientMse();
  appearances = new Array<string>();
  speeches = new Array<string>();
  eyeContacts = new Array<string>();
  motorActivities = new Array<string>();
  affects = new Array<string>();
  moods = new Array<string>();
  orientationImpairment = new Array<string>();
  memoryImpairment = new Array<string>();
  attentions = new Array<string>();
  hallucinations = new Array<string>();
  perceptionOthers = new Array<string>();
  suicidiality = new Array<string>();
  homicidiliaty = new Array<string>();
  delusions = new Array<string>();
  behaviors = new Array<string>();
  insights = new Array<string>();
  judgements = new Array<string>();

  constructor(private router : Router, private route: ActivatedRoute, 
    private sessionService : SessionService, private clientService : ClientsService) { }

  ngOnInit() {
    this.clientId = +this.route.snapshot.params['id'];
    this.clientName = this.route.snapshot.queryParamMap.get('clientName');
    this.refDataSubscription = this.sessionService.getReferenceDataByGroup(1).subscribe(
      (groupedData) => {this.groupdataArr.push(groupedData); this.groupedDataComplete = true;}, 
      (error) => {}
    );
  }

  onSelectBox(i : number, k : number) {
   
    let refData = this.groupdataArr[i].refData[k];
    console.log(refData.referenceValue);
    console.log(refData.referenceTypeId);
    

    if(refData.referenceTypeId === 1){
      if(refData.referenceKey === 'other'){
        this.appearances.push(this.otherComments[i]);
      } else {
        this.appearances.push(refData.referenceValue);
      }
      
    } else if(refData.referenceTypeId === 2) {
      if(refData.referenceKey === 'other'){
        this.speeches.push(this.otherComments[i]);
      } else {
        this.speeches.push(refData.referenceValue);
      }
    } else if(refData.referenceTypeId === 3) {
      if(refData.referenceKey === 'other'){
        this.eyeContacts.push(this.otherComments[i]);
      } else {
        this.eyeContacts.push(refData.referenceValue);
      }
    } else if(refData.referenceTypeId === 4) {
      if(refData.referenceKey === 'other'){
        this.motorActivities.push(this.otherComments[i]);
      } else {
        this.motorActivities.push(refData.referenceValue);
      }
    }  else if(refData.referenceTypeId === 5) {
      if(refData.referenceKey === 'other'){
        this.affects.push(this.otherComments[i]);
      } else {
        this.affects.push(refData.referenceValue);
      }
    } else if(refData.referenceTypeId === 6) {
      if(refData.referenceKey === 'other'){
        this.moods.push(this.otherComments[i]);
      } else {
        this.moods.push(refData.referenceValue);
      }
    } else if(refData.referenceTypeId === 7) {
      if(refData.referenceKey === 'other'){
        this.orientationImpairment.push(this.otherComments[i]);
      } else {
        this.orientationImpairment.push(refData.referenceValue);
      }
    } else if(refData.referenceTypeId === 8) {
      if(refData.referenceKey === 'other'){
        this.memoryImpairment.push(this.otherComments[i]);
      } else {
        this.memoryImpairment.push(refData.referenceValue);
      }
    } else if(refData.referenceTypeId === 9) {
      if(refData.referenceKey === 'other'){
        this.attentions.push(this.otherComments[i]);
      } else {
        this.attentions.push(refData.referenceValue);
      }
    } else if(refData.referenceTypeId === 10) {
      if(refData.referenceKey === 'other'){
        this.hallucinations.push(this.otherComments[i]);
      } else {
        this.hallucinations.push(refData.referenceValue);
      }
    } else if(refData.referenceTypeId === 11) {
      if(refData.referenceKey === 'other'){
        this.perceptionOthers.push(this.otherComments[i]);
      } else {
        this.perceptionOthers.push(refData.referenceValue);
      }
    } else if(refData.referenceTypeId === 12) {
      if(refData.referenceKey === 'other'){
        this.suicidiality.push(this.otherComments[i]);
      } else {
        this.suicidiality.push(refData.referenceValue);
      }
    } else if(refData.referenceTypeId === 13) {
      if(refData.referenceKey === 'other'){
        this.homicidiliaty.push(this.otherComments[i]);
      } else {
        this.homicidiliaty.push(refData.referenceValue);
      }
    } else if(refData.referenceTypeId === 14) {
      if(refData.referenceKey === 'other'){
        this.delusions.push(this.otherComments[i]);
      } else {
        this.delusions.push(refData.referenceValue);
      }
    } else if(refData.referenceTypeId === 15) {
      if(refData.referenceKey === 'other'){
        this.behaviors.push(this.otherComments[i]);
      } else {
        this.behaviors.push(refData.referenceValue);
      }
    } else if(refData.referenceTypeId === 16) {
      if(refData.referenceKey === 'other'){
        this.insights.push(this.otherComments[i]);
      } else {
        this.insights.push(refData.referenceValue);
      }
    } else if(refData.referenceTypeId === 17) {
      if(refData.referenceKey === 'other'){
        this.judgements.push(this.otherComments[i]);
      } else {
        this.judgements.push(refData.referenceValue);
      }
    }
  }


  onSubmit (form : NgForm) {
    const reducer = (s1: string, s2: string) => s1 + ',' + s2;

    this.appearances.forEach(console.log);
    this.judgements.forEach(console.log);

    this.clientMse.clientId = this.clientId;
    this.clientMse.appearance = this.appearances.reduce(reducer, '').toString();
    this.clientMse.speech = this.speeches.reduce(reducer, '').toString();
    this.clientMse.eyeContact = this.eyeContacts.reduce(reducer, '').toString();
    this.clientMse.motorActivity = this.motorActivities.reduce(reducer, '').toString();
    this.clientMse.affect = this.affects.reduce(reducer, '').toString();
    this.clientMse.mood = this.moods.reduce(reducer, '').toString();
    this.clientMse.orientationImpairment = this.orientationImpairment.reduce(reducer, '').toString();
    this.clientMse.memoryImpairment = this.memoryImpairment.reduce(reducer, '').toString();
    this.clientMse.attention = this.attentions.reduce(reducer, '').toString();
    this.clientMse.hallucinations = this.hallucinations.reduce(reducer, '').toString();
    this.clientMse.perceptionComments = this.perceptionOthers.reduce(reducer, '').toString();
    this.clientMse.suicidality = this.suicidiality.reduce(reducer, '').toString();
    this.clientMse.homicidality = this.homicidiliaty.reduce(reducer, '').toString();
    this.clientMse.delusions = this.delusions.reduce(reducer, '').toString();
    this.clientMse.behavior = this.behaviors.reduce(reducer, '').toString();
    this.clientMse.insight = this.insights.reduce(reducer, '').toString();
    this.clientMse.judgement = this.judgements.reduce(reducer, '').toString();
   
    this.submitFormSubscription = this.clientService.addClientMse(this.clientMse).subscribe(
      (clientMSE) => {
        this.successMessage = true;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
    this.resetForm();
  }

  resetForm() {
    this.mseForm.reset();
    
  }

  ngOnDestroy() {
    this.refDataSubscription.unsubscribe();
    this.submitFormSubscription.unsubscribe();
  }
}