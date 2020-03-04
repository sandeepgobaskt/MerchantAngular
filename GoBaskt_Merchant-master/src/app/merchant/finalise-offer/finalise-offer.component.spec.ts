import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinaliseOfferComponent } from './finalise-offer.component';

describe('FinaliseOfferComponent', () => {
  let component: FinaliseOfferComponent;
  let fixture: ComponentFixture<FinaliseOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinaliseOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinaliseOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
