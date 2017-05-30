import { Component, OnInit } from '@angular/core';
import { StuffService } from './stuff.service';
import { InventoryService } from './inventory.service';
import 'rxjs/add/operator/combineLatest'
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Larry\'s Store';
  stuff: any;
  inventory: any;
  visibleStuff$;
  isOpen: true;



  constructor(public stuffService: StuffService, public inventoryService: InventoryService) {
    //t
  }

  ngOnInit() {
    const stuff = this.stuffService.loadStuff();
    const inventory = this.inventoryService.loadInventory();
    this.visibleStuff$ = stuff.combineLatest(inventory, (stuff, inventory) => {

      return stuff.map( (item, idx) => {
        var arr2match = inventory.filter (function(x) {
          return x.id === item.id;
        })[0];
        item.qty = arr2match.quantity;
        console.dir(item);
        return item;
        // return {
        //   name: item.name,
        //   price: item.price,
        //   qty: inventory[idx].quantity,
        // }
      })
    })
    .map(this.removeOutOfStock)
    .delay(1000);

  }

  removeOutOfStock(stuffs) {
    return stuffs && stuffs.filter(item => item.qty)
  }

}
