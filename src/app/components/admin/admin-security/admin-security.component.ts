import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AccessLog {
    id: number;
    user: string;
    action: string;
    ip: string;
    date: Date;
    status: 'success' | 'failed';
}

interface PatientAccess {
    id: number;
    patientName: string;
    accessedBy: string;
    reason: string;
    date: Date;
}

@Component({
    selector: 'app-admin-security',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './admin-security.component.html',
    styleUrl: './admin-security.component.scss'
})
export class AdminSecurityComponent {
    activeTab: 'logs' | 'patient-access' | 'gdpr' = 'logs';

    accessLogs: AccessLog[] = [
        { id: 1, user: 'admin@mawiidi.com', action: 'Login', ip: '192.168.1.100', date: new Date('2024-12-16T11:30:00'), status: 'success' },
        { id: 2, user: 'doctor@mawiidi.com', action: 'Login', ip: '192.168.1.101', date: new Date('2024-12-16T10:45:00'), status: 'success' },
        { id: 3, user: 'unknown@test.com', action: 'Login attempt', ip: '45.33.32.156', date: new Date('2024-12-16T09:15:00'), status: 'failed' },
        { id: 4, user: 'dr.tazi@mawiidi.com', action: 'Patient record access', ip: '192.168.1.102', date: new Date('2024-12-16T08:30:00'), status: 'success' }
    ];

    patientAccesses: PatientAccess[] = [
        { id: 1, patientName: 'Mohammed Alami', accessedBy: 'Dr. Ahmed Tazi', reason: 'Consultation', date: new Date('2024-12-16T10:00:00') },
        { id: 2, patientName: 'Fatima Benali', accessedBy: 'Dr. Sara Idrissi', reason: 'Review medical history', date: new Date('2024-12-16T09:30:00') },
        { id: 3, patientName: 'Ahmed Rachid', accessedBy: 'Admin', reason: 'Complaint investigation', date: new Date('2024-12-15T15:00:00') }
    ];

    setTab(tab: 'logs' | 'patient-access' | 'gdpr'): void { this.activeTab = tab; }
    getStatusClass(status: string): string { return `status-${status}`; }
}
