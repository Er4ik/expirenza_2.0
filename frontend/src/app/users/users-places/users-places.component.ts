import { Component } from '@angular/core';
import { Place, PlaceService } from '../../services/places.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-places',
  imports: [CommonModule],
  templateUrl: './users-places.component.html',
  styleUrl: './users-places.component.scss'
})
export class UsersPlacesComponent {
  places: Place[] = [];

  constructor(private placeService: PlaceService, private router: Router) {}

  ngOnInit(): void {
    this.placeService.getAllPlaces().subscribe({
      next: data => this.places = data,
      error: (err: any) => console.error('Failed to load places', err)
    });
  }

  goToPlaceInfo(id: string) {
    this.router.navigate([`users/places/${id}`]);
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0); // для 5 зірок
  }  
}
