import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelLunchComponent } from './cancel-lunch.component';

describe('CancelLunchComponent', () => {
  let component: CancelLunchComponent;
  let fixture: ComponentFixture<CancelLunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelLunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
