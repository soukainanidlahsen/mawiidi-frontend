import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Notification {
    id: number;
    title: string;
    message: string;
    date: Date;
    read: boolean;
    type: 'appointment' | 'message' | 'system' | 'schedule';
}

@Component({
    selector: 'app-doctor-notifications',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './doctor-notifications.component.html',
    styleUrl: './doctor-notifications.component.scss'
})
export class DoctorNotificationsComponent {
    notifications: Notification[] = [
        { id: 1, title: 'New Appointment', message: 'Mohammed Alami has booked an appointment for tomorrow at 09:00', date: new Date('2024-12-16T11:30:00'), read: false, type: 'appointment' },
        { id: 2, title: 'Schedule Approved', message: 'Your schedule change request for next week has been approved by admin.', date: new Date('2024-12-16T09:15:00'), read: false, type: 'schedule' },
        { id: 3, title: 'New Message', message: 'You have a new message from Fatima Benali regarding prescription renewal.', date: new Date('2024-12-15T16:45:00'), read: true, type: 'message' },
        { id: 4, title: 'Appointment Cancelled', message: 'Ahmed Tazi cancelled his appointment scheduled for today at 14:00', date: new Date('2024-12-15T10:20:00'), read: true, type: 'appointment' },
        { id: 5, title: 'System Maintenance', message: 'The system will undergo maintenance on Sunday from 02:00 to 04:00.', date: new Date('2024-12-14T08:00:00'), read: true, type: 'system' }
    ];

    get unreadCount(): number {
        return this.notifications.filter(n => !n.read).length;
    }

    markAsRead(notification: Notification): void {
        notification.read = true;
    }

    markAllAsRead(): void {
        this.notifications.forEach(n => n.read = true);
    }

    getTypeIcon(type: string): string {
        const icons: Record<string, string> = {
            'appointment': '📅',
            'message': '💬',
            'system': '⚙️',
            'schedule': '🗓️'
        };
        return icons[type] || '🔔';
    }

    getTypeClass(type: string): string {
        return `type-${type}`;
    }
}
