export class Keg {
  public pintsLeft: number = 124;
  public editing: boolean = false;
  constructor(public name: string,
              public price: number,
              public brand: string,
              public alcoholContent: number,
              public type: string,
              public id: number) {}
}
