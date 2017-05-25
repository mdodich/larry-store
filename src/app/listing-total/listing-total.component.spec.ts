import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingTotalComponent } from './listing-total.component';

describe('ListingTotalComponent', () => {
  let component: ListingTotalComponent;
  let fixture: ComponentFixture<ListingTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
