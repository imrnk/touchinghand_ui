import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maritalStatus'
})
export class MaritalStatusPipe implements PipeTransform {

  transform(value: string): any {
    if (value === 'M') {
      return 'Married';
    } else if (value === 'U') {
      return 'Unmarried';
    }  else if (value === 'D') {
      return 'Divorced';
    } else if (value === 'W') {
      return 'Widowed';
    } else if (value === 'L') {
      return 'Live-in';
    } else if (value === 'J') {
      return 'Judicial Separation';
    }
    return null;
  }

}
