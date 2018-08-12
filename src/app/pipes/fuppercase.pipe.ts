import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fuppercase'
})
export class FuppercasePipe implements PipeTransform {

  transform(value: string, howmany: number): any {
    if(value === null || value.length === 0 || howmany === 0) return value;
    return value.substr(0,howmany).toUpperCase() + value.slice(howmany, value.length);    
  }

}
