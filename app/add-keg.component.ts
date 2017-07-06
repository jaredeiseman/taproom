import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Keg } from "./keg.model";

@Component({
  selector: 'add-keg',
  template: `
  <h2>Add new keg</h2>
  <form #addKegForm="ngForm" (ngSubmit)="addKeg(addKegForm); false">
    <div class="column">
      <label for="name">Beer Name</label>
      <input type="text" name="name" ngModel>
      <label for="price">Price</label>
      <input type="number" name="price" step="any" ngModel>
      <label for="brand">Brand</label>
      <input type="text" name="brand" ngModel>
      </div>
      <div class="column">
      <label for="alcohol-content">Alcohol Content</label>
      <input type="number" name="alcohol-content" step="any" ngModel>
      <label for="type">Style</label>
      <input type="text" name="type" ngModel>
      <button type="submit">Submit</button>
    </div>
  </form>
  `
})


export class AddKegComponent {
  @Output() clickSender = new EventEmitter();

  addKeg(form: NgForm) {
    var newKeg = new Keg(form.value.name, form.value.price, form.value.brand, form.value['alcohol-content'], form.value.type.toLowerCase());

    this.clickSender.emit(newKeg);
  }
}
