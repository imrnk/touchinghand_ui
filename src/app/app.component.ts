import { AuthenticationService } from './utility/auth.service';
import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  // genders = ['male', 'female'];
  // signUpForm : FormGroup;
  // forbiddenUserNames = ['Goru', 'Gadha'];
  authorized = false;

  constructor(private authService : AuthenticationService) {}

  ngOnInit(): void {
    this.authService.isAuthorized().subscribe(
      au => this.authorized = au
    );

    // this.signUpForm = new FormGroup({
    //    'userdata' : new FormGroup({
    //       'username' : new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
    //       'email' : new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
    //       }),        
    //     'gender' : new FormControl('male'),
    //     'hobbies' : new FormArray([])
    //   });  

    //   this.signUpForm.valueChanges.subscribe(
    //     (value) => {

    //     }
    //   )

    //   this.signUpForm.statusChanges.subscribe(
    //     (status) => {
          
    //     }
    //   )
  }

  onSubmit(){
  }

  // onAddHobby(){
  //   const control = new FormControl(null, Validators.required);
  //   (<FormArray>this.signUpForm.get('hobbies')).push(control);
  // }

  // onDeleteHobby(index: number) {
  //   (<FormArray>this.signUpForm.get('hobbies')).removeAt(index);
  // }

  // forbiddenNames(control : FormControl) : {[s : string]: boolean} {
  //   if(this.forbiddenUserNames.indexOf(control.value) > -1) {
  //     return {'namesIsForbidden' : true};
  //   }
  //   return null; //in case of valid value send null, not false!
  // }

  // //async validator
  // forbiddenEmails(control : FormControl) : Promise<any> | Observable<any> {
  //   const promise = new Promise<any>(
  //     (resolve, reject) => {
  //       setTimeout(() => {
  //         if(control.value === 'test@test.com'){
  //           resolve({'forbiddenEmail' : true});
  //         } else {
  //           resolve(null);
  //         }
  //       }, 1500);
  //     }
  //   );
  //   return promise;
  // }
}
