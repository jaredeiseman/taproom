import { Component } from '@angular/core';

@Component({
  selector: 'keg',
  template: `
  <h1>Keg template</h1>
  `
})

export class KegComponent {

}

export class Keg {
  public pintsLeft: number = 124;
  constructor(public name: string,
              public price: number,
              public brand: string,
              public alcoholContent: number,
              public type: string) {}
}
