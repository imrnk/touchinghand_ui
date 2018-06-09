import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>, sortType : string, propName : string): any {
    if(value.length == 0 || sortType.length === 0) return value;
    let result = [];
    return value.sort((a, b) => {
        if(sortType === 'asc') {
            return a > b ? 1 : -1;
          } else if(sortType === 'desc') {
            return b > a ? 1 : -1;
          }
    });
    // if(sortType === 'asc') {
    //   result = value.sort((a, b) => a - b);
    // } else if(sortType === 'desc') {
    //   result = value.sort((a, b) => b - a);
    // }
    // return result;
  }
}
