import { Component, Input, Output } from '@angular/core';
import { Keg } from "./keg.model";

@Component({
  selector: 'edit-keg',
  template: `
  <h2>Editable Keg List</h2>
    <div class="edit-container">
      <div class="row" *ngFor="let currentKeg of childKegList">
        <span class="item">
          <span [hidden]="currentKeg.editing === true">{{currentKeg.name}}</span>
          <input [hidden]="!currentKeg.editing" [(ngModel)]="currentKeg.name" type="text">
        </span>
        <span class="item">
          <span [hidden]="currentKeg.editing">{{currentKeg.brand}}</span>
          <input [hidden]="!currentKeg.editing" [(ngModel)]="currentKeg.brand" type="text">
        </span>
        <span class="item">
          <span [hidden]="currentKeg.editing">$ {{currentKeg.price}}</span>
          <input [hidden]="!currentKeg.editing" [(ngModel)]="currentKeg.price" type="text" step="any">
        </span>
        <span class="item">
          <span [hidden]="currentKeg.editing">{{currentKeg.alcoholContent}}%</span>
          <input [hidden]="!currentKeg.editing" [(ngModel)]="currentKeg.alcoholContent" type="text" step="any">
        </span>
        <span class="item">
          <span [hidden]="currentKeg.editing">{{currentKeg.type}}</span>
          <input [hidden]="!currentKeg.editing" [(ngModel)]="currentKeg.type" type="text">
        </span>
        <span class="item">
          <button (click)="editKeg(currentKeg)">Edit</button>
        </span>
        <span class="item">
          <button (click)="subtractPint(currentKeg)">Beer Me</button>
        </span>
      </div>
    </div>
  `
})

export class EditKegComponent {
  @Input() childKegList: Keg[];

  subtractPint(keg) {
    if (keg.pintsLeft > 0) {
      keg.pintsLeft -= 1;
    }
  }

  editKeg(keg) {
    if (keg.editing === false) {
      keg.editing = true;
    } else {
      keg.editing = false;
    }
  }
}
