import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <h1>Mason Jarsten</h1>
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
  <form #addKegForm="ngForm" (ngSubmit)="addKeg(addKegForm);false">
    <label for="name">Beer Name</label>
    <input type="text" name="name" ngModel>
    <label for="price">Price</label>
    <input type="number" name="price" ngModel>
    <label for="brand">Brand</label>
    <input type="text" name="brand" ngModel>
    <label for="alcohol-content">Alcohol Content</label>
    <input type="number" name="alcohol-content" ngModel>
    <label for="type">Style</label>
    <input type="text" name="type" ngModel>
    <button type="submit">Submit</button>
  </form>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Guinness', 5.00, 'Guiness', 3.7, 'stout'),
    new Keg('Cigar City', 5.00, 'Jal Alal', 7.5, 'IPA'),
    new Keg('Belgian White Ale', 5.00, 'Blue Moon', 5.4, 'Witbier')
  ];

  addKeg(form: NgForm) {
    this.kegs.push(new Keg(form.value.name, form.value.price, form.value.brand, form.value['alcohol-content'], form.value.type));
  }
}

export class Keg {
  public pintsLeft: number = 124;
  constructor(public name: string,
              public price: number,
              public brand: string,
              public alcoholContent: number,
              public type: string) {}
}
