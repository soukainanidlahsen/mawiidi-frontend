import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Appointment {
  id: number;
  patientName: string;
  time: string;
  type: string;
  status: 'confirmed' | 'pending' | 'completed';
}

interface Stats {
  todayAppointments: number;
  pendingRequests: number;
  totalPatients: number;
  unreadMessages: number;
}

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './doctor-dashboard.component.html',
  styleUrl: './doctor-dashboard.component.scss'
})
export class DoctorDashboardComponent implements OnInit {
  stats: Stats = {
    todayAppointments: 8,
    pendingRequests: 3,
    totalPatients: 156,
    unreadMessages: 5
  };

  todayAppointments: Appointment[] = [
    { id: 1, patientName: 'Mohammed Alami', time: '09:00', type: 'Consultation', status: 'confirmed' },
    { id: 2, patientName: 'Fatima Benali', time: '09:30', type: 'Follow-up', status: 'confirmed' },
    { id: 3, patientName: 'Ahmed Tazi', time: '10:00', type: 'Consultation', status: 'pending' },
    { id: 4, patientName: 'Sara Idrissi', time: '10:30', type: 'Emergency', status: 'confirmed' },
    { id: 5, patientName: 'Karim Mansouri', time: '11:00', type: 'Consultation', status: 'pending' }
  ];

  currentDate = new Date();

  ngOnInit(): void {
    // Load data from service in real implementation
  }

  getStatusClass(status: string): string {
    return `status-${status}`;
  }
}
