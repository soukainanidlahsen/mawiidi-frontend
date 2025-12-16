import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Doctor {
  id: number;
  firstName: string;
  lastName: string;
  specialty: string;
  city: string;
  address: string;
  phoneNumber: string;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = '/api/doctors';

  constructor(private http: HttpClient) { }

  getAllDoctors(): Observable<Doctor[]> {
    // Mocking for demo
    return of([
      { id: 101, firstName: 'John', lastName: 'Doe', specialty: 'Cardiology', city: 'Casablanca', address: '123 Main St', phoneNumber: '+212...', userId: 201 },
      { id: 102, firstName: 'Sarah', lastName: 'Connor', specialty: 'Dermatology', city: 'Rabat', address: '456 Hassan II', phoneNumber: '+212...', userId: 202 },
      { id: 103, firstName: 'Ali', lastName: 'Benali', specialty: 'General', city: 'Casablanca', address: '789 Zerktouni', phoneNumber: '+212...', userId: 203 }
    ]);
    // return this.http.get<Doctor[]>(this.apiUrl);
  }

  getDoctorById(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiUrl}/${id}`);
  }
}
