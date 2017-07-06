import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "beertype",
  pure: false
})


export class BeerTypePipe implements PipeTransform {
  transform(input: Keg[], filterByType) {
    var output: Keg[] = [];
    for (var i = 0; i < input.length; i++) {
      if (filterByType.toLowerCase() === 'all') {
        output.push(input[i]);
      } else if (filterByType.toLowerCase() === input[i].type.toLowerCase()) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
