import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingAdderComponent } from './listing-adder.component';

describe('ListingAdderComponent', () => {
  let component: ListingAdderComponent;
  let fixture: ComponentFixture<ListingAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
