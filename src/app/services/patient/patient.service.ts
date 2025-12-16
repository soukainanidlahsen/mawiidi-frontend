import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cin: string;
  ramed: string;
  amo: string;
  dateOfBirth: string;
  address: string;
  userId: number;
}

export interface Appointment {
  id: number;
  doctorId: number;
  patientId: number;
  date: string;
  time: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
  doctorName?: string; // For display
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = '/api/patients';

  constructor(private http: HttpClient) { }

  getPatientProfile(userId: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/user/${userId}`);
  }

  updateProfile(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiUrl}/${patient.id}`, patient);
  }

  // Placeholder for appointments API (assuming it might be in a separate service or part of patient service)
  getMyAppointments(patientId: number): Observable<Appointment[]> {
    // Mocking for now as per requirement to focus on frontend structure first
    // In real scenario: return this.http.get<Appointment[]>(`/api/appointments/patient/${patientId}`);
    return new Observable(observer => {
      observer.next([
        { id: 1, doctorId: 101, patientId: patientId, date: '2025-12-10', time: '10:00', status: 'CONFIRMED', doctorName: 'Dr. Smith' },
        { id: 2, doctorId: 102, patientId: patientId, date: '2025-12-15', time: '14:30', status: 'PENDING', doctorName: 'Dr. Doe' }
      ]);
      observer.complete();
    });
  }
}
