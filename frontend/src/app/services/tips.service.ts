import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tip {
  userId: string;      // ID користувача
  placeId: string;     // ID закладу
  amount: number;      // сума чайових
  comment?: string;    // текстовий коментар
}

@Injectable({
  providedIn: 'root'
})
export class TipService {
  private apiUrl = 'https://expirenza-2-0.onrender.com/api/tips'; // змінити за потреби

  constructor(private http: HttpClient) {}

  // Отримати всі чайові
  getAllTips(): Observable<Tip[]> {
    return this.http.get<Tip[]>(this.apiUrl);
  }

  // Отримати один запис чайових
  getTipById(id: string): Observable<Tip> {
    return this.http.get<Tip>(`${this.apiUrl}/${id}`);
  }

  // Створити новий запис
  createTip(tip: Tip): Observable<Tip> {
    return this.http.post<Tip>(this.apiUrl, tip);
  }

  // Оновити чайові
  updateTip(id: string, tip: Partial<Tip>): Observable<Tip> {
    return this.http.put<Tip>(`${this.apiUrl}/${id}`, tip);
  }

  // Видалити чайові
  deleteTip(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
