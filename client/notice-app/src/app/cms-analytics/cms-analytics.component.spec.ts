import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsAnalyticsComponent } from './cms-analytics.component';

describe('CmsAnalyticsComponent', () => {
  let component: CmsAnalyticsComponent;
  let fixture: ComponentFixture<CmsAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsAnalyticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmsAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
