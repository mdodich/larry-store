import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';

@Injectable()
export class InventoryService {

  constructor(private http: Http) { }

  loadInventory() {

    //return list;

    var inventory = this.http
      .get('http://localhost:4200/assets/stuffInventory.json')
      .map(response => response.json())

    return inventory;
  }

}
