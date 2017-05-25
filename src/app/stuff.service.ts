import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';

@Injectable()
export class StuffService {

  //outOfStock = 'Fossils';
  stuff$ = Observable.of([]);

  constructor(private http: Http) { }

  loadStuff() {
    return this.http
      .get('http://localhost:4200/assets/stuff.json')
      .map(response => response.json())
      //.map(this.removeOutOfStock.bind(this))
      //.delay(3000);
      //.map(body => body.filter(thing => thing.name !== this.outOfStock));
      //.filter(body => true);
  }

  buy(itemName) {
    //this.stuff = this.stuff.filter(thing => thing.name !== itemName.name);
  }

  add(itemName) {
    //this.stuff.push({ 'name': itemName, 'price': 0 });
  }

  clear() {
    console.log('cleared');
    //this.stuff = [];
  }

  // get stuff() {
  //   return this.stuff.filter(thing => thing.name !== this.outOfStock);
  // }

  //removeOutOfStock = list => {
  //  return list.filter(thing => thing.name !== this.outOfStock);
  //}
  

}
