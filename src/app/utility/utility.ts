import { FormControl } from "@angular/forms";

export class Utility {


    static validDate(control : FormControl) : {[s : string]: boolean} {
        let datePattern = /^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/](19|20)\d\d$/;
        let datePattern2 = /^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/;
        if(control.value !== null && !control.value.match(datePattern2)) {
          return {'incorrectDate' : true};
        }
        return null; //in case of valid value send null, not false!
      }

      static validMobileNumber(control : FormControl) : {[s:string]: boolean} {
        let mobilenumberPattern = /([0-9]{10})|(\+[0-9]{2}[-]?[0-9]{10})/;
        if(control.value !== null && !control.value.match(mobilenumberPattern)) {
          return {'invalidNumber' : true};
        }
        return null; //in case of valid value send null, not false!
      }  
}