import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: 'unique',
  pure: false
})

export class UniquePipe implements PipeTransform {
  transform(input: Keg[]) {
    var output: Keg[] = [];
    var testArray = [];
    for (var i = 0; i < input.length; i++) {
      testArray.push(input[i].type);
    }
    for (var i = 0; i < input.length; i++) {
      if (input[i].type.indexOf(testArray[i])) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
