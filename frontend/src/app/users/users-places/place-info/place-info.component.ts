import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place, PlaceService } from '../../../services/places.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-place-info',
  imports: [CommonModule, FormsModule],
  templateUrl: './place-info.component.html',
  styleUrl: './place-info.component.scss'
})
export class UsersPlaceInfoComponent {
  place!: Place;
  rating = 0;
  commentText = '';
  reviews!: any;

  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService
  ) {}

  ngOnInit(): void {
    const placeId = this.route.snapshot.paramMap.get('id');
    if (placeId) {
      this.placeService.getPlaceById(placeId).subscribe((data) => {
        this.place = data;
        this.reviews = data.reviews;
      });
    }
  }

  setRating(value: number): void {
    this.rating = value;
    this.placeService.updatePlace(this.place._id, {
      rating: this.rating,
    }).subscribe(() => {
      this.rating = 0;
      this.ngOnInit(); // перезавантажити відгуки
    });
  }

  submitComment(): void {
    if (!this.commentText) return;

    this.placeService.addReview(this.place._id, {
      text: this.commentText
    }).subscribe(() => {
      this.commentText = '';
      this.ngOnInit();
    });
  }

  getStars(count: number = 5): number[] {
    return Array(5).fill(0).map((x, i) => i);
  }
}
