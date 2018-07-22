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
  refDataSubscription : Subscription;
  //mseForm : FormGroup;
  groupedDataComplete = false;
  //formBuilder = new FormBuilder();
  groupdataArr = new Array<GroupedReferenceData>();
  judgements = ['good','fair','poor'];

  constructor(private router : Router, private route: ActivatedRoute, 
    private sessionService : SessionService) { }

  ngOnInit() {
    this.clientId = +this.route.snapshot.params['id'];
    this.clientName = this.route.snapshot.queryParamMap.get('clientName');

    this.refDataSubscription = this.sessionService.getReferenceDataByGroup(1).subscribe(
      (groupedData) => {this.groupdataArr.push(groupedData); this.groupedDataComplete = true;}, 
      (error) => {}
    );
  }

  onSelectBox(i : number, k : number) {
    console.log(this.groupdataArr[i].referenceDataType, this.groupdataArr[i].refData[k]);
  }

  onSubmit (form : NgForm) {
    const formVal = form.value;
    console.log(formVal);
    //this.resetForm();
  }

  resetForm() {
    this.mseForm.reset();
    
  }

  ngOnDestroy() {
    this.refDataSubscription.unsubscribe();
  }
}