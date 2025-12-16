import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Stats {
  totalEstablishments: number;
  totalDoctors: number;
  totalPatients: number;
  todayAppointments: number;
  pendingPlannings: number;
  openComplaints: number;
}

interface RecentActivity {
  id: number;
  type: 'appointment' | 'complaint' | 'planning' | 'user';
  message: string;
  time: Date;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  stats: Stats = {
    totalEstablishments: 12,
    totalDoctors: 156,
    totalPatients: 8543,
    todayAppointments: 342,
    pendingPlannings: 5,
    openComplaints: 8
  };

  recentActivities: RecentActivity[] = [
    { id: 1, type: 'planning', message: 'Dr. Ahmed submitted schedule change request', time: new Date('2024-12-16T11:30:00') },
    { id: 2, type: 'complaint', message: 'New complaint from patient Mohammed Alami', time: new Date('2024-12-16T10:45:00') },
    { id: 3, type: 'appointment', message: '15 new appointments booked today', time: new Date('2024-12-16T09:00:00') },
    { id: 4, type: 'user', message: 'New doctor registration: Dr. Fatima Benali', time: new Date('2024-12-15T16:30:00') },
    { id: 5, type: 'planning', message: 'Dr. Sara schedule approved', time: new Date('2024-12-15T14:00:00') }
  ];

  currentDate = new Date();

  getActivityIcon(type: string): string {
    const icons: Record<string, string> = {
      'appointment': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
      'complaint': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
      'planning': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/><path d="m9 14 2 2 4-4"/></svg>',
      'user': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
    };
    return icons[type] || '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
  }
}
