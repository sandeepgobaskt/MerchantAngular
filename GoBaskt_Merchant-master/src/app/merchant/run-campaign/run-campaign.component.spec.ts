import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunCampaignComponent } from './run-campaign.component';

describe('RunCampaignComponent', () => {
  let component: RunCampaignComponent;
  let fixture: ComponentFixture<RunCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
