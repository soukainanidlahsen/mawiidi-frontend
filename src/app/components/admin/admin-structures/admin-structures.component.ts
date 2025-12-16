import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Establishment {
    id: number;
    name: string;
    type: string;
    services: number;
    doctors: number;
    status: 'active' | 'inactive';
}

interface Doctor {
    id: number;
    name: string;
    specialty: string;
    establishment: string;
    status: 'active' | 'inactive';
}

@Component({
    selector: 'app-admin-structures',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './admin-structures.component.html',
    styleUrl: './admin-structures.component.scss'
})
export class AdminStructuresComponent {
    activeTab: 'establishments' | 'doctors' = 'establishments';
    searchTerm = '';

    establishments: Establishment[] = [
        { id: 1, name: 'CHU Ibn Sina', type: 'Hospital', services: 15, doctors: 45, status: 'active' },
        { id: 2, name: 'Hôpital Moulay Youssef', type: 'Hospital', services: 12, doctors: 32, status: 'active' },
        { id: 3, name: 'Centre de Santé Agdal', type: 'Health Center', services: 8, doctors: 18, status: 'active' },
        { id: 4, name: 'Clinique Atlas', type: 'Clinic', services: 6, doctors: 12, status: 'inactive' }
    ];

    doctors: Doctor[] = [
        { id: 1, name: 'Dr. Ahmed Tazi', specialty: 'Cardiology', establishment: 'CHU Ibn Sina', status: 'active' },
        { id: 2, name: 'Dr. Fatima Benali', specialty: 'Neurology', establishment: 'CHU Ibn Sina', status: 'active' },
        { id: 3, name: 'Dr. Mohammed Alami', specialty: 'Pediatrics', establishment: 'Hôpital Moulay Youssef', status: 'active' },
        { id: 4, name: 'Dr. Sara Idrissi', specialty: 'Dermatology', establishment: 'Centre de Santé Agdal', status: 'inactive' }
    ];

    setTab(tab: 'establishments' | 'doctors'): void {
        this.activeTab = tab;
    }
}
