import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Complaint {
    id: number;
    patientName: string;
    doctorName: string;
    establishment: string;
    subject: string;
    date: Date;
    status: 'open' | 'in-progress' | 'closed';
}

@Component({
    selector: 'app-admin-complaints',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './admin-complaints.component.html',
    styleUrl: './admin-complaints.component.scss'
})
export class AdminComplaintsComponent {
    filterStatus = '';
    filterDoctor = '';

    complaints: Complaint[] = [
        { id: 1, patientName: 'Mohammed Alami', doctorName: 'Dr. Ahmed Tazi', establishment: 'CHU Ibn Sina', subject: 'Long waiting time', date: new Date('2024-12-15'), status: 'open' },
        { id: 2, patientName: 'Fatima Benali', doctorName: 'Dr. Sara Idrissi', establishment: 'CHU Ibn Sina', subject: 'Appointment cancelled without notice', date: new Date('2024-12-14'), status: 'open' },
        { id: 3, patientName: 'Ahmed Rachid', doctorName: 'Dr. Mohammed Alami', establishment: 'Hôpital Moulay Youssef', subject: 'Staff behavior', date: new Date('2024-12-13'), status: 'in-progress' },
        { id: 4, patientName: 'Khadija Mansouri', doctorName: 'Dr. Fatima Benali', establishment: 'CHU Ibn Sina', subject: 'Prescription error', date: new Date('2024-12-10'), status: 'closed' }
    ];

    get openCount(): number { return this.complaints.filter(c => c.status === 'open').length; }
    getStatusClass(status: string): string { return `status-${status}`; }
}
