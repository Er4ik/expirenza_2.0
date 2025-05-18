import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessesPaymentsComponent } from './businesses-payments.component';

describe('BusinessesPaymentsComponent', () => {
  let component: BusinessesPaymentsComponent;
  let fixture: ComponentFixture<BusinessesPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessesPaymentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessesPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
