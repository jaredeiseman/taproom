import { Component } from '@angular/core';
import { Keg } from './keg.component';

@Component({
  selector: 'board',
  template: `
  <h1>Board template</h1>
  <table>
    <tr *ngFor="let currentKeg of kegs">
      <th>Name: {{currentKeg.name}}</th>
      <th>Brand: {{currentKeg.brand}}</th>
      <th>Price: {{currentKeg.price}}</th>
      <th>Alcohol Content: {{currentKeg.alcoholContent}}</th>
      <th>Type: {{currentKeg.type}}</th>
    </tr>
    <tr>
    </tr>
    </table>

  `
})

export class BoardComponent {
  // keg: Keg = new Keg('beer', 5.00, 'deschutes', 3.7, 'stout');

}

export class Board {
  kegs: Keg[] = [
    new Keg('Guinness', 5.00, 'Guiness', 3.7, 'stout'),
    new Keg('Cigar City', 5.00, 'Jal Alal', 7.5, 'IPA'),
    new Keg('Belgian White Ale', 5.00, 'Blue Moon', 5.4, 'Witbier')
  ];
}
