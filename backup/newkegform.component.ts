import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BoardComponent } from './board.component';

@Component({
  selector: 'newkegform',
  template: `
  <h1>New Keg Form Component</h1>
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

export class NewKegFormComponent {
  addKeg(form: NgForm) {
    // console.log(BoardComponent.kegs);
  }
}
