import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-complaints',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './complaints.component.html',
    styleUrl: './complaints.component.scss'
})
export class ComplaintsComponent {
    complaints = [
        {
            id: 1,
            subject: 'Long waiting time',
            description: 'I waited 2 hours for my appointment.',
            status: 'pending',
            date: new Date('2024-12-10'),
            response: null
        },
        {
            id: 2,
            subject: 'Billing issue',
            description: 'I was charged incorrectly for my consultation.',
            status: 'resolved',
            date: new Date('2024-12-05'),
            response: 'We have reviewed your case and issued a refund.'
        }
    ];

    newComplaint = {
        subject: '',
        description: ''
    };

    showForm = false;

    toggleForm() {
        this.showForm = !this.showForm;
    }

    submitComplaint() {
        if (this.newComplaint.subject && this.newComplaint.description) {
            this.complaints.unshift({
                id: this.complaints.length + 1,
                subject: this.newComplaint.subject,
                description: this.newComplaint.description,
                status: 'pending',
                date: new Date(),
                response: null
            });
            this.newComplaint = { subject: '', description: '' };
            this.showForm = false;
        }
    }
}
