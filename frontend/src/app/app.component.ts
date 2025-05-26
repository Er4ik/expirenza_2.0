import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { UsersComponent } from './users/users.component';
import { BusinessesComponent } from './businesses/businesses.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, BusinessesComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);
  }
}
