import { Keg } from './keg.model';

export class Customer {
  beersPurchased: Keg[] = [];
  totalTab: number = 0;
  constructor(public name: string) {}
}
