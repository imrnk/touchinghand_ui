import { Utility } from './../../utility/utility';
import { ClientsService } from './../../clients.service';
import { ClientMse } from './../../model/client-mse';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, NgForm } from '@angular/forms';
import { SessionService } from './../../sessions/session-service';
import { GroupedReferenceData } from '../../model/grouped-reference-data';



@Component({
  selector: 'app-mse',
  templateUrl: './mse.component.html'
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
  checked : boolean[][] = new Array(new Array()); //Array(17).fill(false).map(x => Array(10).fill(false));
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
  formValid = false;
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
        this.commentBoxCount += groupedData.refData.length; //filter(rd => rd.referenceValue === 'other')
      }, 
      (error) => {},
      () => {
              this.otherComments = new Array(this.commentBoxCount).fill('');
              for(var out = 0; out < this.groupdataArr.length; out++) {
                this.checked[out] = new Array();
                var thisrefData = this.groupdataArr[out].refData;
                this.checked[out] = Array(thisrefData.length).fill(false);
              }
            }
    );
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSelectBox(i : number, k : number) {
    
    let refData = this.groupdataArr[i].refData[k];
    
    if(refData.referenceTypeId === 1 && refData.referenceValue !== 'other'){
      //Somehow angular checked and unchecked is working opposite, when 
      // the checkbox is checked its sending false, and when unchecked its sending true !!!
      if(!this.checked[i][k]){      
        this.appearances.splice(k, 0, refData.referenceValue);
      } else {
        let index = this.appearances.indexOf(refData.referenceValue);
        this.appearances.splice(index, 1);
      }
    } 
    else if(refData.referenceTypeId === 2 && refData.referenceValue !== 'other') {
      if(!this.checked[i][k]){      
        this.speeches.splice(k, 0, refData.referenceValue);     
      } else {
        let index = this.speeches.indexOf(refData.referenceValue);
        this.speeches.splice(index, 1);
      }
    } else if(refData.referenceTypeId === 3 && refData.referenceValue !== 'other') {
      if(!this.checked[i][k]){      
        this.eyeContacts.splice(k, 0, refData.referenceValue);   
      } else {
        let index = this.eyeContacts.indexOf(refData.referenceValue);
        this.eyeContacts.splice(index, 1);
      }
    } else if(refData.referenceTypeId === 4 && refData.referenceValue !== 'other') {
      if(!this.checked[i][k]){      
        this.motorActivities.splice(k, 0, refData.referenceValue);   
      } else {
        let index = this.motorActivities.indexOf(refData.referenceValue);
        this.motorActivities.splice(index, 1);
      }
    }  else if(refData.referenceTypeId === 5 && refData.referenceValue !== 'other') {
      if(!this.checked[i][k]){      
        this.affects.splice(k, 0, refData.referenceValue);   
      } else {
        let index = this.affects.indexOf(refData.referenceValue);
        this.affects.splice(index, 1);
      }
    } else if(refData.referenceTypeId === 6 && refData.referenceValue !== 'other') {
      if(!this.checked[i][k]){      
        this.moods.splice(k, 0, refData.referenceValue);   
      } else {
        let index = this.moods.indexOf(refData.referenceValue);
        this.moods.splice(index, 1);
      }
    } else if(refData.referenceTypeId === 7 && refData.referenceValue !== 'other') {
      if(!this.checked[i][k]){      
        this.orientationImpairment.splice(k, 0, refData.referenceValue);   
      } else {
        let index = this.orientationImpairment.indexOf(refData.referenceValue);
        this.orientationImpairment.splice(index, 1);
      }
    } else if(refData.referenceTypeId === 8 && refData.referenceValue !== 'other') {
      if(!this.checked[i][k]){      
        this.memoryImpairment.splice(k, 0, refData.referenceValue);  
      } else {
        let index = this.memoryImpairment.indexOf(refData.referenceValue);
        this.memoryImpairment.splice(index, 1);
      }
    } else if(refData.referenceTypeId === 9 && refData.referenceValue !== 'other') {
      if(!this.checked[i][k]){      
        this.attentions.splice(k, 0, refData.referenceValue);  
      } else {
        let index = this.attentions.indexOf(refData.referenceValue);
        this.attentions.splice(index, 1);
      }
    } else if(refData.referenceTypeId === 10 && refData.referenceValue !== 'other') {
      if(!this.checked[i][k]){      
        this.hallucinations.splice(k, 0, refData.referenceValue);  
      } else {
        let index = this.hallucinations.indexOf(refData.referenceValue);
        this.hallucinations.splice(index, 1);
      }
    } else if(refData.referenceTypeId === 11 && refData.referenceValue !== 'other') {
      if(!this.checked[i][k]){      
        this.perceptionOthers.splice(k, 0, refData.referenceValue);  
      } else {
        let index = this.perceptionOthers.indexOf(refData.referenceValue);
        this.perceptionOthers.splice(index, 1);
      }
    } else if(refData.referenceTypeId === 12 && refData.referenceValue !== 'other') {
      if(!this.checked[i][k]){      
        this.suicidiality.splice(k, 0, refData.referenceValue);  
      } else {
        let index = this.suicidiality.indexOf(refData.referenceValue);
        this.suicidiality.splice(index, 1);
      }
    } else if(refData.referenceTypeId === 13 && refData.referenceValue !== 'other') {
      if(!this.checked[i][k]){      
        this.homicidiliaty.splice(k, 0, refData.referenceValue);  
      } else {
        let index = this.homicidiliaty.indexOf(refData.referenceValue);
        this.homicidiliaty.splice(index, 1);
      }
    } else if(refData.referenceTypeId === 14 && refData.referenceValue !== 'other') {
      if(!this.checked[i][k]){      
        this.delusions.splice(k, 0, refData.referenceValue);  
      } else {
        let index = this.delusions.indexOf(refData.referenceValue);
        this.delusions.splice(index, 1);
      }
    } else if(refData.referenceTypeId === 15 && refData.referenceValue !== 'other') {
      if(!this.checked[i][k]){      
        this.behaviors.splice(k, 0, refData.referenceValue);  
      } else {
        let index = this.behaviors.indexOf(refData.referenceValue);
        this.behaviors.splice(index, 1);
      }
    } else if(refData.referenceTypeId === 16 && refData.referenceValue !== 'other') {
      if(!this.checked[i][k]){      
        this.insights.splice(k, 0, refData.referenceValue);  
      } else {
        let index = this.insights.indexOf(refData.referenceValue);
        this.insights.splice(index, 1);
      }
    } else if(refData.referenceTypeId === 17 && refData.referenceValue !== 'other') {
      if(!this.checked[i][k]){      
        this.judgements.splice(k, 0, refData.referenceValue);  
      } else {
        let index = this.judgements.indexOf(refData.referenceValue);
        this.judgements.splice(index, 1);
      }
    }

    this.formValid = Utility.anyTrue(this.checked.slice());
  }


  onSubmit (form : NgForm) {

    const reducer = (s1: string, s2: string) => {
                                    if(s1 === '') 
                                    return s2;
                                    else if(s2 === '')
                                    return s1;
                                    else 
                                    return s1 + ',' + s2
                                  };

    for(var i = 0; i < this.otherComments.length; i++ ){
      if(i === 0) {
        this.judgements.push(this.otherComments[i]);
      } else if (i === 2) {
        this.moods.push(this.otherComments[i]);
      } else if (i === 3) {
        this.affects.push(this.otherComments[i]);
      } else if (i === 4) {
        this.memoryImpairment.push(this.otherComments[i]);
      } else if (i == 5) {
        this.motorActivities.push(this.otherComments[i]);
      }else if (i === 7) {
        this.eyeContacts.push(this.otherComments[i]);
      } else if (i === 8) {
        this.insights.push(this.otherComments[i]);
      } else if (i === 9) {
        this.appearances.push(this.otherComments[i]);
      }else if (i === 10) {
        this.delusions.push(this.otherComments[i]);
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
    if(Utility.atleastOneElem(this.appearances))
      this.clientMse.appearance = this.appearances.reduce(reducer, '').toString();
    if(Utility.atleastOneElem(this.speeches)) 
      this.clientMse.speech = this.speeches.reduce(reducer, '').toString();
    if(Utility.atleastOneElem(this.eyeContacts))
      this.clientMse.eyeContact = this.eyeContacts.reduce(reducer, '').toString();
    if(Utility.atleastOneElem(this.motorActivities))
      this.clientMse.motorActivity = this.motorActivities.reduce(reducer, '').toString();
    if(Utility.atleastOneElem(this.affects))
      this.clientMse.affect = this.affects.reduce(reducer, '').toString();
    if(Utility.atleastOneElem(this.moods))
      this.clientMse.mood = this.moods.reduce(reducer, '').toString();
    if(Utility.atleastOneElem(this.orientationImpairment))
      this.clientMse.orientationImpairment = this.orientationImpairment.reduce(reducer, '').toString();
    if(Utility.atleastOneElem(this.memoryImpairment))
      this.clientMse.memoryImpairment = this.memoryImpairment.reduce(reducer, '').toString();
    if(Utility.atleastOneElem(this.attentions))
      this.clientMse.attention = this.attentions.reduce(reducer, '').toString();
    if(Utility.atleastOneElem(this.hallucinations))
      this.clientMse.hallucinations = this.hallucinations.reduce(reducer, '').toString();
    if(Utility.atleastOneElem(this.perceptionOthers))
      this.clientMse.perceptionComments = this.perceptionOthers.reduce(reducer, '').toString();
    if(Utility.atleastOneElem(this.suicidiality))
      this.clientMse.suicidality = this.suicidiality.reduce(reducer, '').toString();
    if(Utility.atleastOneElem(this.homicidiliaty))
      this.clientMse.homicidality = this.homicidiliaty.reduce(reducer, '').toString();
    if(Utility.atleastOneElem(this.delusions))
      this.clientMse.delusions = this.delusions.reduce(reducer, '').toString();
    if(Utility.atleastOneElem(this.behaviors))
      this.clientMse.behavior = this.behaviors.reduce(reducer, '').toString();
    if(Utility.atleastOneElem(this.insights))
      this.clientMse.insight = this.insights.reduce(reducer, '').toString();
    if(Utility.atleastOneElem(this.judgements))
      this.clientMse.judgement = this.judgements.reduce(reducer, '').toString();
   
    console.log(JSON.stringify(this.clientMse));

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
    this.formValid = false;
  }

  ngOnDestroy() {
    this.refDataSubscription.unsubscribe();
    if(this.submitFormSubscription){
      this.submitFormSubscription.unsubscribe();
    }
  }
}