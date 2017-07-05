import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Keg } from "./keg.model";

@Component({
  selector: 'app-root',
  template: `
  <h1>Mason Jarsten</h1>
  <h2>Editable Keg List</h2>
  <table>
    <tr *ngFor="let currentKeg of kegs">
      <td>Name: <span [hidden]="currentKeg.editing">{{currentKeg.name}}</span><input [hidden]="!currentKeg.editing" [(ngModel)]="currentKeg.name" type="text"></td>
      <td>Brand: <span [hidden]="currentKeg.editing">{{currentKeg.brand}}</span><input [hidden]="!currentKeg.editing" [(ngModel)]="currentKeg.brand" type="text"></td>
      <td>Price: <span [hidden]="currentKeg.editing">{{currentKeg.price}}</span><input [hidden]="!currentKeg.editing" [(ngModel)]="currentKeg.price" type="text" step="any"></td>
      <td>Alcohol Content: <span [hidden]="currentKeg.editing">{{currentKeg.alcoholContent}}</span><input [hidden]="!currentKeg.editing" [(ngModel)]="currentKeg.alcoholContent" type="text" step="any"></td>
      <td>Type: <span [hidden]="currentKeg.editing">{{currentKeg.type}}</span><input [hidden]="!currentKeg.editing" [(ngModel)]="currentKeg.type" type="text"></td>
      <td><button (click)="editKeg(currentKeg.id)">Edit</button></td>
    </tr>
    </table>
    <h2>Add new keg</h2>
    <form #addKegForm="ngForm" (ngSubmit)="addKeg(addKegForm); false">
      <label for="name">Beer Name</label>
      <input type="text" name="name" ngModel>
      <label for="price">Price</label>
      <input type="number" name="price" step="any" ngModel>
      <label for="brand">Brand</label>
      <input type="text" name="brand" ngModel>
      <label for="alcohol-content">Alcohol Content</label>
      <input type="number" name="alcohol-content" step="any" ngModel>
      <label for="type">Style</label>
      <input type="text" name="type" ngModel>
      <button type="submit">Submit</button>
    </form>
    <keg-list [childKegList]="kegs"></keg-list>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Guinness', 5.00, 'Guiness', 3.7, 'stout', 0),
    new Keg('Cigar City', 5.00, 'Jal Alal', 7.5, 'IPA', 1),
    new Keg('Belgian White Ale', 5.00, 'Blue Moon', 5.4, 'Witbier', 2)
  ];

  addKeg(form: NgForm) {
    this.kegs.push(new Keg(form.value.name, form.value.price, form.value.brand, form.value['alcohol-content'], form.value.type, this.kegs.length));
  }

  editKeg(id) {
    if (this.kegs[id].editing === false) {
      this.kegs[id].editing = true;
    } else {
      this.kegs[id].editing = false;
    }
  }
}
