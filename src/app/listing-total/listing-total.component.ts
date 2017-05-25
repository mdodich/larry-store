import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listing-total',
  templateUrl: './listing-total.component.html',
  styleUrls: ['./listing-total.component.css']
})
export class ListingTotalComponent implements OnInit {
  @Input() total;

  constructor() { }

  ngOnInit() {
  }

}
