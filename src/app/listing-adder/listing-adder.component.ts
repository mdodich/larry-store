import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listing-adder',
  templateUrl: './listing-adder.component.html',
  styleUrls: ['./listing-adder.component.css']
})
export class ListingAdderComponent implements OnInit {

  @Output() pressAdd = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
