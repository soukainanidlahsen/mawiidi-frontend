import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Appointment {
    id: number;
    patientName: string;
    doctorName: string;
    establishment: string;
    date: Date;
    status: 'completed' | 'confirmed' | 'cancelled' | 'no-show';
}

@Component({
    selector: 'app-admin-appointments',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './admin-appointments.component.html',
    styleUrl: './admin-appointments.component.scss'
})
export class AdminAppointmentsComponent {
    stats = {
        total: 1256,
        completed: 892,
        cancelled: 124,
        noShow: 78,
        occupancyRate: 76,
        noShowRate: 6.2
    };

    filterEstablishment = '';
    filterDoctor = '';

    appointments: Appointment[] = [
        { id: 1, patientName: 'Mohammed Alami', doctorName: 'Dr. Ahmed Tazi', establishment: 'CHU Ibn Sina', date: new Date('2024-12-16T09:00:00'), status: 'completed' },
        { id: 2, patientName: 'Fatima Benali', doctorName: 'Dr. Sara Idrissi', establishment: 'CHU Ibn Sina', date: new Date('2024-12-16T09:30:00'), status: 'confirmed' },
        { id: 3, patientName: 'Ahmed Rachid', doctorName: 'Dr. Ahmed Tazi', establishment: 'CHU Ibn Sina', date: new Date('2024-12-16T10:00:00'), status: 'no-show' },
        { id: 4, patientName: 'Khadija Mansouri', doctorName: 'Dr. Mohammed Alami', establishment: 'Hôpital Moulay Youssef', date: new Date('2024-12-16T10:30:00'), status: 'cancelled' }
    ];

    getStatusClass(status: string): string { return `status-${status}`; }
}
