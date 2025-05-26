import { Component } from '@angular/core';
import { Place, PlaceService } from '../../services/places.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-businesses-places',
  imports: [CommonModule],
  templateUrl: './businesses-places.component.html',
  styleUrl: './businesses-places.component.scss'
})
export class BusinessesPlacesComponent {
  places: Place[] = [];

  constructor(private placeService: PlaceService, private router: Router) {}

  ngOnInit(): void {
    this.placeService.getAllPlaces().subscribe({
      next: data => this.places = data,
      error: (err: any) => console.error('Failed to load places', err)
    });
  }

  openCreateModal() {
    console.log('Open create modal');
  }

  goToPlaceInfo(id: string) {
    this.router.navigate([`businesses/places/${id}`]);
  }
}