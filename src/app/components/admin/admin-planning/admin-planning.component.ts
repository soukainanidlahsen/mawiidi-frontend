import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PlanningRequest {
    id: number;
    doctorName: string;
    establishment: string;
    submittedDate: Date;
    weekStart: Date;
    changes: string;
    status: 'pending' | 'approved' | 'rejected';
}

@Component({
    selector: 'app-admin-planning',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './admin-planning.component.html',
    styleUrl: './admin-planning.component.scss'
})
export class AdminPlanningComponent {
    requests: PlanningRequest[] = [
        { id: 1, doctorName: 'Dr. Ahmed Tazi', establishment: 'CHU Ibn Sina', submittedDate: new Date('2024-12-15'), weekStart: new Date('2024-12-23'), changes: 'Morning slots only (08:00-12:00)', status: 'pending' },
        { id: 2, doctorName: 'Dr. Sara Idrissi', establishment: 'CHU Ibn Sina', submittedDate: new Date('2024-12-14'), weekStart: new Date('2024-12-23'), changes: 'No appointments on Wednesday', status: 'pending' },
        { id: 3, doctorName: 'Dr. Mohammed Alami', establishment: 'Hôpital Moulay Youssef', submittedDate: new Date('2024-12-13'), weekStart: new Date('2024-12-23'), changes: 'Extended hours Friday (08:00-18:00)', status: 'pending' },
        { id: 4, doctorName: 'Dr. Fatima Benali', establishment: 'CHU Ibn Sina', submittedDate: new Date('2024-12-10'), weekStart: new Date('2024-12-16'), changes: 'Reduced capacity (50%)', status: 'approved' },
        { id: 5, doctorName: 'Dr. Karim Mansouri', establishment: 'Centre de Santé Agdal', submittedDate: new Date('2024-12-09'), weekStart: new Date('2024-12-16'), changes: 'Leave request - Vacation', status: 'rejected' }
    ];

    get pendingCount(): number { return this.requests.filter(r => r.status === 'pending').length; }

    approve(request: PlanningRequest): void { request.status = 'approved'; }
    reject(request: PlanningRequest): void { request.status = 'rejected'; }
    getStatusClass(status: string): string { return `status-${status}`; }
}
