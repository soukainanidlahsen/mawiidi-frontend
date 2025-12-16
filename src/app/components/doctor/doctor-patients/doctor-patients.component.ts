import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Patient {
    id: number;
    name: string;
    age: number;
    gender: string;
    lastVisit: Date;
    condition: string;
    status: 'active' | 'recovered' | 'follow-up';
}

@Component({
    selector: 'app-doctor-patients',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './doctor-patients.component.html',
    styleUrl: './doctor-patients.component.scss'
})
export class DoctorPatientsComponent {
    searchTerm = '';

    patients: Patient[] = [
        { id: 1, name: 'Mohammed Alami', age: 45, gender: 'Male', lastVisit: new Date('2024-12-10'), condition: 'Hypertension', status: 'active' },
        { id: 2, name: 'Fatima Benali', age: 32, gender: 'Female', lastVisit: new Date('2024-12-12'), condition: 'Diabetes Type 2', status: 'follow-up' },
        { id: 3, name: 'Ahmed Tazi', age: 58, gender: 'Male', lastVisit: new Date('2024-12-08'), condition: 'Cardiac Arrhythmia', status: 'active' },
        { id: 4, name: 'Sara Idrissi', age: 28, gender: 'Female', lastVisit: new Date('2024-12-14'), condition: 'Migraine', status: 'recovered' },
        { id: 5, name: 'Karim Mansouri', age: 52, gender: 'Male', lastVisit: new Date('2024-12-11'), condition: 'COPD', status: 'active' },
        { id: 6, name: 'Amina Rahimi', age: 40, gender: 'Female', lastVisit: new Date('2024-12-09'), condition: 'Arthritis', status: 'follow-up' }
    ];

    getStatusClass(status: string): string {
        return `status-${status}`;
    }
}
