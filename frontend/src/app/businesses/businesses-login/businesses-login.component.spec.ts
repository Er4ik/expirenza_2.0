import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessesLoginComponent } from './businesses-login.component';

describe('BusinessesLoginComponent', () => {
  let component: BusinessesLoginComponent;
  let fixture: ComponentFixture<BusinessesLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessesLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessesLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
