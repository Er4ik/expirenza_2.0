import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { BusinessesLoginComponent } from './businesses/businesses-login/businesses-login.component';
import { BusinessesPlacesComponent } from './businesses/businesses-places/businesses-places.component';
import { BusinessesPaymentsComponent } from './businesses/businesses-payments/businesses-payments.component';
import { UsersPlacesComponent } from './users/users-places/users-places.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'businesses',
    component: BusinessesComponent,
  },
  {
    path: 'businesses/login',
    component: BusinessesLoginComponent,
  },
  {
    path: 'businesses/:id/places',
    component: BusinessesPlacesComponent,
  },
  {
    path: 'businesses/:id/:id/payments',
    component: BusinessesPaymentsComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/places',
    component: UsersPlacesComponent,
  }
];
