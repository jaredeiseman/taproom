import { Component, Input, Output } from '@angular/core';
import { Keg } from "./keg.model";

@Component({
  selector: 'edit-keg',
  template: `
  <h2>Editable Keg List</h2>
  <table>
    <tr *ngFor="let currentKeg of childKegList">
      <td>Name: <span [hidden]="currentKeg.editing">{{currentKeg.name}}</span><input [hidden]="!currentKeg.editing" [(ngModel)]="currentKeg.name" type="text"></td>
      <td>Brand: <span [hidden]="currentKeg.editing">{{currentKeg.brand}}</span><input [hidden]="!currentKeg.editing" [(ngModel)]="currentKeg.brand" type="text"></td>
      <td>Price: <span [hidden]="currentKeg.editing">{{currentKeg.price}}</span><input [hidden]="!currentKeg.editing" [(ngModel)]="currentKeg.price" type="text" step="any"></td>
      <td>Alcohol Content: <span [hidden]="currentKeg.editing">{{currentKeg.alcoholContent}}</span><input [hidden]="!currentKeg.editing" [(ngModel)]="currentKeg.alcoholContent" type="text" step="any"></td>
      <td>Type: <span [hidden]="currentKeg.editing">{{currentKeg.type}}</span><input [hidden]="!currentKeg.editing" [(ngModel)]="currentKeg.type" type="text"></td>
      <td><button (click)="editKeg(currentKeg)">Edit</button></td>
      <td><button (click)="subtractPint(currentKeg)">Beer Me</button></td>
    </tr>
    </table>
  `
})

export class EditKegComponent {
  @Input() childKegList: Keg[];

  subtractPint(keg) {
    keg.pintsLeft -= 1;
  }

  editKeg(keg) {
    if (keg.editing === false) {
      keg.editing = true;
    } else {
      keg.editing = false;
    }
  }
}
