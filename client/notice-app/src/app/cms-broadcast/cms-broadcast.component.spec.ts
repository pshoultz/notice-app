import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsBroadcastComponent } from './cms-broadcast.component';

describe('CmsBroadcastComponent', () => {
  let component: CmsBroadcastComponent;
  let fixture: ComponentFixture<CmsBroadcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsBroadcastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmsBroadcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
