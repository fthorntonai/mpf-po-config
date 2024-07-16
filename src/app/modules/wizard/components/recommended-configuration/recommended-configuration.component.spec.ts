import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedConfigurationComponent } from './recommended-configuration.component';

describe('RecommendedConfigurationComponent', () => {
  let component: RecommendedConfigurationComponent;
  let fixture: ComponentFixture<RecommendedConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecommendedConfigurationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendedConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
