import { Component, Input } from '@angular/core';
import { Keg } from "./keg.model";

@Component({
  selector: 'keg-list',
  template: `
  <h2>Keg List</h2>
  <table>
    <tr *ngFor="let currentKeg of childKegList">
      <td>Name: {{currentKeg.name}}</td>
      <td>Brand: {{currentKeg.brand}}</td>
      <td>Price: {{currentKeg.price}}</td>
      <td>Alcohol Content: {{currentKeg.alcoholContent}}</td>
      <td>Type: {{currentKeg.type}}</td>
    </tr>
  </table>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
}
