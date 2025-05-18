import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessesComponent } from './businesses.component';

describe('BusinessesComponent', () => {
  let component: BusinessesComponent;
  let fixture: ComponentFixture<BusinessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
