import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from '../../services/places.service';
import { TipService } from '../../services/tips.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class PaymentComponent {
  baseAmount: number = 299;
  tipPercent: number = 0;
  rating: number = 0;
  comment: string = '';

  constructor(private placeService: PlaceService, private router: Router, private route: ActivatedRoute, private tipService: TipService) {}

  get totalAmount(): number {
    return this.baseAmount + (this.baseAmount * this.tipPercent) / 100;
  }

  getStars(): number[] {
    return Array(5).fill(0).map((_, i) => i);
  }

  setRating(value: number): void {
    this.rating = value;
  }

  selectTip(percent: number): void {
    this.tipPercent = percent;
  }

  submitPayment(): void {
    const placeId = this.route.snapshot.paramMap.get('id');

    if (!this.rating || !this.comment || !placeId) {
      alert('Будь ласка, поставте оцінку та залиште відгук перед оплатою.');
      return;
    }
    
    const tipData = {
      userId: 1,
      placeId,
      amount: this.baseAmount,
      paymentMethodId: 1,
    };
    
    this.placeService.updatePlace(placeId, { rating: this.rating }).pipe(
      switchMap(() => this.placeService.addReview(placeId, { text: this.comment })),
      switchMap(() => this.tipService.createTip(tipData))
    ).subscribe({
      next: () => {
        console.log('Успішно все збережено');
      },
      error: (err) => {
        console.error('Помилка при збереженні даних:', err);
      }
    });
  
    this.router.navigate(['/users/places']);
  }
}