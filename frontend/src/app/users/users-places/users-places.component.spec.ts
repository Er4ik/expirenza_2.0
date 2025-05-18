import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPlacesComponent } from './users-places.component';

describe('UsersPlacesComponent', () => {
  let component: UsersPlacesComponent;
  let fixture: ComponentFixture<UsersPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersPlacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
