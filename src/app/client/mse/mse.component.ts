import { ClientsService } from './../../clients.service';
import { SortPipe } from './../../pipes/sort.pipe';
import { ClientMse } from './../../model/client-mse';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, NgForm } from '@angular/forms';
import { SessionService } from './../../sessions/session-service';
import { GroupedReferenceData } from '../../model/grouped-reference-data';
import { relative } from 'path';

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
  otherComments : string[];
  commentBoxCount = 0;
  clientMse = new ClientMse();
  appearances: string[] = [];
  speeches : string[] = [];
  eyeContacts : string[] = [];
  motorActivities : string[] = [];
  affects : string[] = [];
  moods : string[] = [];
  orientationImpairment : string[] = [];
  memoryImpairment : string[] = [];
  attentions : string[] = [];
  hallucinations : string[] = [];
  perceptionOthers : string[] = [];
  suicidiality : string[] = [];
  homicidiliaty : string[] = [];
  delusions : string[] = [];
  behaviors : string[] = [];
  insights : string[] = [];
  judgements : string[] = [];
  lastTabIndex = 0;

  constructor(private router : Router, private route: ActivatedRoute, 
    private sessionService : SessionService, private clientService : ClientsService) { }

  ngOnInit() {
    this.clientId = +this.route.snapshot.params['id'];
    this.clientName = this.route.snapshot.queryParamMap.get('clientName');
    this.refDataSubscription = this.sessionService.getReferenceDataByGroup(1).subscribe(
      (groupedData) => {
        this.groupdataArr.push(groupedData); 
        this.groupedDataComplete = true;
        this.lastTabIndex = this.groupdataArr.map(gd => gd.refData.length).reduce((a1, a2) => a1 + a2);
        this.commentBoxCount += groupedData.refData.filter(rd => rd.referenceValue === 'other').length;
      }, 
      (error) => {},
      () => {this.otherComments = new Array(this.commentBoxCount).fill('')}
    );
  }

  onCancel() {
    console.log('on cancel');
    this.router.navigate(['../'], {relativeTo : this.route});
  }

  onSelectBox(i : number, k : number, elem : HTMLInputElement) {
   
    let refData = this.groupdataArr[i].refData[k];
    
    if(refData.referenceTypeId === 1 && refData.referenceValue !== 'other'){
      if(elem.checked){
        this.appearances.push(refData.referenceValue);
      } else {
        this.appearances.pop();
      }
      
    } else if(refData.referenceTypeId === 2 && refData.referenceValue !== 'other') {
     this.speeches.push(refData.referenceValue);      
    } else if(refData.referenceTypeId === 3 && refData.referenceValue !== 'other') {
     this.eyeContacts.push(refData.referenceValue);      
    } else if(refData.referenceTypeId === 4 && refData.referenceValue !== 'other') {
      this.motorActivities.push(refData.referenceValue);      
    }  else if(refData.referenceTypeId === 5 && refData.referenceValue !== 'other') {
      this.affects.push(refData.referenceValue);      
    } else if(refData.referenceTypeId === 6 && refData.referenceValue !== 'other') {
      this.moods.push(refData.referenceValue);      
    } else if(refData.referenceTypeId === 7 && refData.referenceValue !== 'other') {
      this.orientationImpairment.push(refData.referenceValue);
    } else if(refData.referenceTypeId === 8 && refData.referenceValue !== 'other') {
      this.memoryImpairment.push(refData.referenceValue);
    } else if(refData.referenceTypeId === 9 && refData.referenceValue !== 'other') {
      this.attentions.push(refData.referenceValue);
    } else if(refData.referenceTypeId === 10 && refData.referenceValue !== 'other') {
      this.hallucinations.push(refData.referenceValue);
    } else if(refData.referenceTypeId === 11 && refData.referenceValue !== 'other') {
      this.perceptionOthers.push(refData.referenceValue);
    } else if(refData.referenceTypeId === 12 && refData.referenceValue !== 'other') {
      this.suicidiality.push(refData.referenceValue);
    } else if(refData.referenceTypeId === 13 && refData.referenceValue !== 'other') {
      this.homicidiliaty.push(refData.referenceValue);      
    } else if(refData.referenceTypeId === 14 && refData.referenceValue !== 'other') {
      this.delusions.push(refData.referenceValue);      
    } else if(refData.referenceTypeId === 15 && refData.referenceValue !== 'other') {
      this.behaviors.push(refData.referenceValue);
    } else if(refData.referenceTypeId === 16 && refData.referenceValue !== 'other') {
      this.insights.push(refData.referenceValue);
    } else if(refData.referenceTypeId === 17 && refData.referenceValue !== 'other') {
      this.judgements.push(refData.referenceValue);
    }
  }


  onSubmit (form : NgForm) {

//    this.otherComments.forEach(console.log);
    const reducer = (s1: string, s2: string) => s1 + ',' + s2;

    for(var i = 0; i < this.otherComments.length; i++ ){
      if(i === 0) {
        this.judgements.push(this.otherComments[i]);
      } else if (i === 1) {
        this.moods.push(this.otherComments[i]);
      } else if (i === 2) {
        this.affects.push(this.otherComments[i]);
      } else if (i === 3) {
        this.motorActivities.push(this.otherComments[i]);
      } else if (i === 5) {
        this.eyeContacts.push(this.otherComments[i]);
      } else if (i === 6) {
        this.insights.push(this.otherComments[i]);
      } else if (i === 8) {
        this.appearances.push(this.otherComments[i]);
      } else if (i === 9) {
        this.delusions.push(this.otherComments[i]);
      } else if (i === 11) {
        this.memoryImpairment.push(this.otherComments[i]);
      } else if (i === 12) {
        this.speeches.push(this.otherComments[i]);
      } else if (i === 13) {
        this.attentions.push(this.otherComments[i]);
      } else if (i === 15) {
        this.behaviors.push(this.otherComments[i]);
      } else if (i === 16) {
        this.hallucinations.push(this.otherComments[i]);
      }
    }
    

    this.clientMse.clientId = this.clientId;
    if(this.appearances !== null)
      this.clientMse.appearance = this.appearances.reduce(reducer, '').toString();
    if(this.speeches  !== null)  
      this.clientMse.speech = this.speeches.reduce(reducer, '').toString();
    if(this.eyeContacts  !== null)  
      this.clientMse.eyeContact = this.eyeContacts.reduce(reducer, '').toString();
    if(this.motorActivities  !== null)  
      this.clientMse.motorActivity = this.motorActivities.reduce(reducer, '').toString();
    if(this.affects  !== null)  
      this.clientMse.affect = this.affects.reduce(reducer, '').toString();
    if(this.moods  !== null)  
      this.clientMse.mood = this.moods.reduce(reducer, '').toString();
    if(this.orientationImpairment  !== null)  
      this.clientMse.orientationImpairment = this.orientationImpairment.reduce(reducer, '').toString();
    if(this.memoryImpairment  !== null)  
      this.clientMse.memoryImpairment = this.memoryImpairment.reduce(reducer, '').toString();
    if(this.attentions  !== null)  
      this.clientMse.attention = this.attentions.reduce(reducer, '').toString();
    if(this.hallucinations  !== null)  
      this.clientMse.hallucinations = this.hallucinations.reduce(reducer, '').toString();
    if(this.perceptionOthers  !== null)  
      this.clientMse.perceptionComments = this.perceptionOthers.reduce(reducer, '').toString();
    if(this.suicidiality  !== null)   
      this.clientMse.suicidality = this.suicidiality.reduce(reducer, '').toString();
    if(this.homicidiliaty  !== null)  
      this.clientMse.homicidality = this.homicidiliaty.reduce(reducer, '').toString();
    if(this.delusions  !== null)  
      this.clientMse.delusions = this.delusions.reduce(reducer, '').toString();
    if(this.behaviors  !== null)  
      this.clientMse.behavior = this.behaviors.reduce(reducer, '').toString();
    if(this.insights  !== null)  
      this.clientMse.insight = this.insights.reduce(reducer, '').toString();
    if(this.judgements  !== null)  
      this.clientMse.judgement = this.judgements.reduce(reducer, '').toString();
   
    //console.log(JSON.stringify(this.clientMse));

    this.submitFormSubscription = this.clientService.addClientMse(this.clientMse).subscribe(
      (clientMSE) => {
        this.successMessage = true;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
    //this.resetForm();
  }

  resetForm() {
    this.mseForm.reset();
    
  }

  ngOnDestroy() {
    this.refDataSubscription.unsubscribe();
    this.submitFormSubscription.unsubscribe();
  }
}