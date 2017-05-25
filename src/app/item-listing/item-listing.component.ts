import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.css']
})
export class ItemListingComponent {
  @Input() list;
  @Output() pressBuy = new EventEmitter();
  @Output() pressClear = new EventEmitter();
}
