import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Consultation {
    id: number;
    patientName: string;
    patientId: number;
    date: Date;
    diagnosis: string;
    prescription: string;
    notes: string;
    status: 'completed' | 'pending-report' | 'in-progress';
}

interface Patient {
    id: number;
    name: string;
    lastVisit: Date;
}

@Component({
    selector: 'app-doctor-consultations',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './doctor-consultations.component.html',
    styleUrl: './doctor-consultations.component.scss'
})
export class DoctorConsultationsComponent {
    showModal = false;

    // Available patients for selection
    patients: Patient[] = [
        { id: 1, name: 'Mohammed Alami', lastVisit: new Date('2024-12-16') },
        { id: 2, name: 'Fatima Benali', lastVisit: new Date('2024-12-16') },
        { id: 3, name: 'Ahmed Tazi', lastVisit: new Date('2024-12-15') },
        { id: 4, name: 'Sara Idrissi', lastVisit: new Date('2024-12-15') },
        { id: 5, name: 'Karim Mansouri', lastVisit: new Date('2024-12-14') },
        { id: 6, name: 'Khadija Mansouri', lastVisit: new Date('2024-12-10') },
        { id: 7, name: 'Youssef Rachid', lastVisit: new Date('2024-12-08') }
    ];

    // New consultation form data
    newConsultation = {
        patientId: 0,
        diagnosis: '',
        prescription: '',
        notes: ''
    };

    consultations: Consultation[] = [
        { id: 1, patientName: 'Mohammed Alami', patientId: 1, date: new Date('2024-12-16'), diagnosis: 'Hypertension Stage 2', prescription: 'Amlodipine 5mg', notes: '', status: 'completed' },
        { id: 2, patientName: 'Fatima Benali', patientId: 2, date: new Date('2024-12-16'), diagnosis: 'Diabetes follow-up', prescription: 'Metformin 850mg', notes: '', status: 'pending-report' },
        { id: 3, patientName: 'Ahmed Tazi', patientId: 3, date: new Date('2024-12-15'), diagnosis: 'Cardiac Arrhythmia', prescription: 'Beta-blocker', notes: '', status: 'completed' },
        { id: 4, patientName: 'Sara Idrissi', patientId: 4, date: new Date('2024-12-15'), diagnosis: 'Migraine', prescription: 'Sumatriptan 50mg', notes: '', status: 'completed' },
        { id: 5, patientName: 'Karim Mansouri', patientId: 5, date: new Date('2024-12-14'), diagnosis: 'COPD Exacerbation', prescription: 'Inhaler + Antibiotics', notes: '', status: 'in-progress' }
    ];

    openNewConsultation(): void {
        this.showModal = true;
        this.newConsultation = { patientId: 0, diagnosis: '', prescription: '', notes: '' };
    }

    closeModal(): void {
        this.showModal = false;
    }

    saveConsultation(): void {
        if (!this.newConsultation.patientId) {
            alert('Veuillez sélectionner un patient');
            return;
        }
        if (!this.newConsultation.diagnosis.trim()) {
            alert('Veuillez entrer un diagnostic');
            return;
        }

        const patient = this.patients.find(p => p.id === this.newConsultation.patientId);
        if (patient) {
            const newId = Math.max(...this.consultations.map(c => c.id)) + 1;
            this.consultations.unshift({
                id: newId,
                patientName: patient.name,
                patientId: patient.id,
                date: new Date(),
                diagnosis: this.newConsultation.diagnosis,
                prescription: this.newConsultation.prescription,
                notes: this.newConsultation.notes,
                status: 'in-progress'
            });
            this.closeModal();
        }
    }

    getStatusClass(status: string): string {
        return `status-${status}`;
    }

    getStatusLabel(status: string): string {
        const labels: Record<string, string> = {
            'completed': 'Completed',
            'pending-report': 'Pending Report',
            'in-progress': 'In Progress'
        };
        return labels[status] || status;
    }
}
