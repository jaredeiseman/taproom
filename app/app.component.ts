import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Keg } from "./keg.model";

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <img src="/resources/images/logo-white.png" alt="baller logo" class="logo-img">
    <keg-list [childKegList]="kegs"></keg-list>
    <add-keg (clickSender)="pushKeg($event)"></add-keg>
    <edit-keg [childKegList]="kegs"></edit-keg>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Guinness', 5.00, 'Guiness', 3.7, 'stout'),
    new Keg('Cigar City', 5.00, 'Jal Alal', 7.5, 'IPA'),
    new Keg('Belgian White Ale', 5.00, 'Blue Moon', 5.4, 'Witbier')
  ];

  pushKeg(keg) {
    this.kegs.push(keg);
  }

}
