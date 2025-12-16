import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth/auth.service';
import { PatientService, Appointment } from '../../../services/patient/patient.service';

@Component({
  selector: 'app-my-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-appointments.component.html',
  styleUrl: './my-appointments.component.scss'
})
export class MyAppointmentsComponent implements OnInit {
  appointments: Appointment[] = [];
  isLoading: boolean = true;

  constructor(
    private authService: AuthService,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    const user = this.authService.getUser();
    if (user) {
      // Assuming patient ID is same as user ID for demo, or we fetch patient profile first
      // Ideally we get patient ID from profile.
      this.patientService.getPatientProfile(user.userId).subscribe(patient => {
        this.loadAppointments(patient.id);
      });
    }
  }

  loadAppointments(patientId: number): void {
    this.patientService.getMyAppointments(patientId).subscribe({
      next: (data) => {
        this.appointments = data;
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }
}
