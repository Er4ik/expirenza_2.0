import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PlaceService } from '../../../services/places.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-place-info',
  templateUrl: './place-info.component.html',
  styleUrls: ['./place-info.component.scss'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class PlaceInfoComponent implements OnInit {
  placeForm!: FormGroup;
  placeId!: string;
  reviews!: any;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private placeService: PlaceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.placeId = this.route.snapshot.paramMap.get('id')!;
    if (this.placeId !== 'new') {
      this.placeService.getPlaceById(this.placeId).subscribe(place => {
        this.placeForm = this.fb.group({
          name: [place.name],
          address: [place.address],
          city: [place.city]
        });
        this.reviews = place.reviews;
      });
    } else {
      this.placeForm = this.fb.group({
        name: [''],
        address: [''],
        city: ['']
      });
    }
  }

  onSubmit() {
    if (this.placeForm.valid) {
      this.placeService.updatePlace(this.placeId, this.placeForm.value).subscribe(() => {
        alert('Збережено!');
        this.router.navigate(['/my-places']);
      });
    }
  }

  onSubmitNew() {
    if (this.placeForm.valid) {
      this.placeService.createPlace(this.placeForm.value).subscribe(() => {
        alert('Збережено!');
        this.router.navigate(['/my-places']);
      });
    }
  }
}
