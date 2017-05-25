import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parrot'
})
export class ParrotPipe implements PipeTransform {

  transform(value: any, times = 2, exclaim = false): any {
    console.log(times, exclaim);
    let retVal = '';

    for (var i = 0; i < times + 1; i++) {
      retVal += ' ' + value;
    }
    if (exclaim) {
      retVal = retVal.toUpperCase();
    }
    return retVal;
  }

}
