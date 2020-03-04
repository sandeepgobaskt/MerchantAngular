import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftOfferComponent } from './draft-offer.component';

describe('DraftOfferComponent', () => {
  let component: DraftOfferComponent;
  let fixture: ComponentFixture<DraftOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
