import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTransform'
})
export class StatusTransformPipe implements PipeTransform {

  transform(value: string): any {
    if(value === 'Y') {
      return 'Ongoing';
    } else if (value === 'C') {
      return 'Closed';
    } else if (value === 'L') {
      return 'Left';
    } else if (value === 'M') {
      return 'Married';
    } else if (value === 'U') {
      return 'Unmarried';
    }
    return null;
  }

}
