import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibleOfferComponent } from './eligible-offer.component';

describe('EligibleOfferComponent', () => {
  let component: EligibleOfferComponent;
  let fixture: ComponentFixture<EligibleOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EligibleOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligibleOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
