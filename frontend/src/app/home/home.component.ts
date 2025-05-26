import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor (private router: Router) {}
  goToRegister() {
    this.router.navigate(['businesses/login']);
  }

  goToUsersPlaces() {
    this.router.navigate(['users/places']);
  }
}
