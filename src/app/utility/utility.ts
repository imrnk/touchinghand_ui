import { FormControl } from "@angular/forms";

export class Utility {


    static validDate(control : FormControl) : {[s : string]: boolean} {
        let datePattern = /^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/](19|20)\d\d$/;

        if(control.value !== null && !control.value.match(datePattern)) {
          return {'incorrectDate' : true};
        }
        return null; //in case of valid value send null, not false!
      }
}