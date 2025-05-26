import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessesRegisterComponent } from './businesses-register.component';

describe('BusinessesRegisterComponent', () => {
  let component: BusinessesRegisterComponent;
  let fixture: ComponentFixture<BusinessesRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessesRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessesRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
