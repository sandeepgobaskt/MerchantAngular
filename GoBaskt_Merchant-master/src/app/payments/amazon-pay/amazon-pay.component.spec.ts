import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonPayComponent } from './amazon-pay.component';

describe('AmazonPayComponent', () => {
  let component: AmazonPayComponent;
  let fixture: ComponentFixture<AmazonPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmazonPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
