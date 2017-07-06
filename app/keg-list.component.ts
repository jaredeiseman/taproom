import { Component, Input } from '@angular/core';
import { Keg } from "./keg.model";

@Component({
  selector: 'keg-list',
  template: `
  <div id="keg-list">
    <div class="keg" *ngFor="let currentKeg of childKegList">
      <div class="description">
        <p class="title">{{currentKeg.brand}}<strong>{{currentKeg.name}}</strong></p>
        <p class="type-ac">{{currentKeg.type}}<strong>{{currentKeg.alcoholContent}}%</strong></p>
      </div>
      <div class="details">
        <p class="price">{{currentKeg.price}}</p>
        <p [class]="colorKeg(currentKeg)" class="pints"></p><span style="font-size: 10px;">{{currentKeg.pintsLeft}} / 124</span>
      </div>
    </div>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];

  colorKeg(currentKeg) {
    if (currentKeg.pintsLeft > 93){
      return "full pints";
    } else if (currentKeg.pintsLeft <= 93 && currentKeg.pintsLeft > 62){
      return "three-quarters pints";
    } else if (currentKeg.pintsLeft <= 62 && currentKeg.pintsLeft > 10){
      return "half pints";
    } else if (currentKeg.pintsLeft <= 10 && currentKeg.pintsLeft > 0) {
      return "one-quarter pints";
    } else {
      return 'pints';
    }
  }
}
