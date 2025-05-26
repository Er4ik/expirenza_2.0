import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { BusinessesLoginComponent } from './businesses/businesses-login/businesses-login.component';
import { BusinessesPlacesComponent } from './businesses/businesses-places/businesses-places.component';
import { BusinessesPaymentsComponent } from './businesses/businesses-payments/businesses-payments.component';
import { UsersPlacesComponent } from './users/users-places/users-places.component';
import { BusinessesRegisterComponent } from './businesses/businesses-register/businesses-register.component';
import { PlaceInfoComponent } from './businesses/businesses-places/place-info/place-info.component';
import { UsersPlaceInfoComponent } from './users/users-places/place-info/place-info.component';
import { PaymentComponent } from './users/payment/payment.component';

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
    path: 'businesses/register',
    component: BusinessesRegisterComponent,
  },
  {
    path: 'businesses/places',
    component: BusinessesPlacesComponent,
  },
  {
    path: 'businesses/places/:id',
    component: PlaceInfoComponent,
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
  },
  {
    path: 'users/places/:id',
    component: UsersPlaceInfoComponent,
  },
  {
    path: 'users/places/:id/payment',
    component: PaymentComponent,
  }
];
