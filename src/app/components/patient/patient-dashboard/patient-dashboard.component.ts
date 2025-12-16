import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { PatientService, Patient, Appointment } from '../../../services/patient/patient.service';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import { TranslationService } from '../../../services/i18n/translation.service';

@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './patient-dashboard.component.html',
  styleUrl: './patient-dashboard.component.scss'
})
export class PatientDashboardComponent implements OnInit {
  patient: Patient | null = null;
  upcomingAppointments: Appointment[] = [];
  isLoading: boolean = true;
  today: Date = new Date();

  constructor(
    private authService: AuthService,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    const user = this.authService.getUser();
    if (user) {
      this.loadPatientData(user.userId);
    }
  }

  loadPatientData(userId: number): void {
    // In a real app, we would fetch the patient profile. 
    // For MVP/Demo without full backend, we might need to mock or handle 404 if profile doesn't exist yet.
    this.patientService.getPatientProfile(userId).subscribe({
      next: (data) => {
        this.patient = data;
        this.loadAppointments(data.id);
      },
      error: (err: any) => {
        console.error('Error loading patient profile', err);
        this.isLoading = false;
        // Fallback for demo if backend is not ready
        this.patient = {
          id: 1,
          firstName: 'Guest',
          lastName: 'Patient',
          email: 'guest@example.com',
          phoneNumber: '',
          cin: '',
          ramed: '',
          amo: '',
          dateOfBirth: '',
          address: '',
          userId: userId
        };
        this.loadAppointments(1);
      }
    });
  }

  loadAppointments(patientId: number): void {
    this.patientService.getMyAppointments(patientId).subscribe({
      next: (data) => {
        this.upcomingAppointments = data;
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
