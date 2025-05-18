import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessesPlacesComponent } from './businesses-places.component';

describe('BusinessesPlacesComponent', () => {
  let component: BusinessesPlacesComponent;
  let fixture: ComponentFixture<BusinessesPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessesPlacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessesPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
