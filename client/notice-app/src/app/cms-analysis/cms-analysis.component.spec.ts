import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsAnalysisComponent } from './cms-analysis.component';

describe('CmsAnalysisComponent', () => {
  let component: CmsAnalysisComponent;
  let fixture: ComponentFixture<CmsAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmsAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
