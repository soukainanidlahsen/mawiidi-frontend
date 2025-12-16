import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-admin-settings',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './admin-settings.component.html',
    styleUrl: './admin-settings.component.scss'
})
export class AdminSettingsComponent {
    settings = {
        appointmentDuration: 20,
        minBookingDelay: 24,
        maxBookingDelay: 30,
        reminderStrategy: 'sms-email',
        smsReminder: true,
        emailReminder: true,
        reminderTime: 24
    };

    roles = [
        { id: 1, name: 'Admin', permissions: 'Full access', users: 3 },
        { id: 2, name: 'Doctor', permissions: 'Patient records, Schedule, Consultations', users: 156 },
        { id: 3, name: 'Patient', permissions: 'Booking, Records, Messaging', users: 8543 }
    ];

    saveSettings(): void {
        console.log('Settings saved:', this.settings);
    }
}
