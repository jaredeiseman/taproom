import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Keg } from "./keg.model";
import { Customer } from './customer.model';

@Component({
  selector: 'pos',
  template: `
    <form id="pos-add-customer-form" #addCustomerForm="ngForm" (ngSubmit)="addCustomer(addCustomerForm); false">
      <label for="name">Customer Name</label>
      <input type='text' name="name" ngModel>
      <input type="submit">
    </form>
    <div class="pos-container">
      <div class="tab-details">
        <div class="tab-details-customer" *ngIf="selectedCustomer">
          <ul>
            <li *ngFor="let beer of selectedCustomer.beersPurchased">{{beer.name}}</li>
          </ul>
          <p>{{selectedCustomer.totalTab}}</p>
        </div>
      </div>
      <div class="customer-pos">
        <button [class.active]="customer === selectedCustomer"(click)="selectCustomer(customer);" *ngFor="let customer of customers">{{customer.name}}</button>
      </div>
      <div class="beer-pos">
        <button *ngFor="let beer of childKegList" style="border: 1px solid white" (click)="addPint(beer); subtractPint(beer);">{{beer.name}}</button>
      </div>
    </div>
  `
})

export class PosComponent {
  @Input() childKegList: Keg[];

  customers: Customer[] = [new Customer("Jared"), new Customer("Kristen"), new Customer("Eunice"), new Customer("Fanny")];
  selectedCustomer = null;

  subtractPint(keg) {
    if (keg.pintsLeft > 0) {
      keg.pintsLeft -= 1;
    }
  }

  makeActive(event) {
    event.target.classList.add('active');
  }

  addCustomer(form: NgForm) {
    var newCustomer = new Customer(form.value.name);
    this.customers.push(newCustomer);
  }

  selectCustomer(customer) {
    this.selectedCustomer = customer;
  }

  updateTotalTab(beer) {
    this.selectedCustomer.totalTab += beer.price;
  }

  addPint(beer) {
    if (this.selectedCustomer !== null) {
      this.selectedCustomer.beersPurchased.push(beer);
      this.updateTotalTab(beer);
    }
  }
}
