import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Keg } from "./keg.model";

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div id="page-one">
      <img src="/resources/images/logo-white.png" alt="baller logo" class="logo-img">
      <keg-list [childKegList]="kegs"></keg-list>
    </div>
    <div id="page-two">
      <pos [childKegList]="kegs"></pos>
      <edit-keg [childKegList]="kegs"></edit-keg>
      <add-keg (clickSender)="pushKeg($event)"></add-keg>
    </div>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    // new Keg('Guinness Draught', 5.00, 'Guiness', 4.2, 'stout'),
    new Keg('Organic Chocolate Stout', 5.00, 'Sam Smith', 5, 'stout'),
    new Keg('Belgian White Ale', 5.00, 'Blue Moon', 5.4, 'witbier'),
    new Keg('Apricot Ale', 5.00, 'Pyramid', 5.1, 'fruit beer'),
    new Keg('Black Butte', 5.00, 'Deschutes', 5.2, 'porter'),
    new Keg('Duchesse De Bourgogne', 5.00, 'Brouwerij Verhaeghe', 6, 'red ale'),
  ];

  pushKeg(keg) {
    this.kegs.push(keg);
  }
}
