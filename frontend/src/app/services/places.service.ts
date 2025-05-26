import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface Review {
  text: string;
}

export interface Place {
  _id: string;
  name: string;
  address?: string;
  city?: string;
  rating?: number;
  createdAt?: string;
  reviews?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private apiUrl = 'https://expirenza-2-0.onrender.com/api/places'; // змінити під себе

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllPlaces(): Observable<Place[]> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<Place[]>(this.apiUrl);
  }

  getPlaceById(id: string): Observable<Place> {
    return this.http.get<Place>(`${this.apiUrl}/${id}`);
  }

  createPlace(data: Partial<Place>): Observable<Place> {
    const token = localStorage.getItem('token');
    return this.http.post<Place>(`${this.apiUrl}`, data, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  
  updatePlace(id: string, data: Partial<Place>): Observable<Place> {
    const token = localStorage.getItem('token');
    return this.http.put<Place>(`${this.apiUrl}/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  addReview(placeId: string, review: Review): Observable<Place> {
    const token = this.authService.getToken();
    return this.http.post<Place>(
      `${this.apiUrl}/${placeId}/review`,
      review,
      {
        headers: new HttpHeaders({ Authorization: `Bearer ${token}` })
      }
    );
  }
}
