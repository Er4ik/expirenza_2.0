import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface Place {
  _id: string;
  name: string;
  address?: string;
  city?: string;
  createdAt?: string;
  reviews?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private apiUrl = 'http://localhost:4000/api/places'; // змінити під себе

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
}
