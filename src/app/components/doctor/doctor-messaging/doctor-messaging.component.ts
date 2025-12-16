import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
    id: number;
    senderName: string;
    subject: string;
    preview: string;
    content?: string;
    date: Date;
    read: boolean;
    type: 'patient' | 'admin' | 'system';
}

interface Patient {
    id: number;
    name: string;
}

@Component({
    selector: 'app-doctor-messaging',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './doctor-messaging.component.html',
    styleUrl: './doctor-messaging.component.scss'
})
export class DoctorMessagingComponent {
    selectedMessage: Message | null = null;
    showComposeModal = false;
    replyMessage = '';

    // Available patients for messaging
    patients: Patient[] = [
        { id: 1, name: 'Mohammed Alami' },
        { id: 2, name: 'Fatima Benali' },
        { id: 3, name: 'Ahmed Tazi' },
        { id: 4, name: 'Sara Idrissi' },
        { id: 5, name: 'Karim Mansouri' },
        { id: 6, name: 'Khadija Mansouri' },
        { id: 7, name: 'Youssef Rachid' }
    ];

    // New message form
    newMessage = {
        recipientId: 0,
        subject: '',
        content: ''
    };

    messages: Message[] = [
        { id: 1, senderName: 'Mohammed Alami', subject: 'Follow-up question', preview: 'Doctor, I wanted to ask about the medication dosage...', content: 'Doctor, I wanted to ask about the medication dosage. Should I take it before or after meals? Also, I noticed some mild side effects.', date: new Date('2024-12-16T10:30:00'), read: false, type: 'patient' },
        { id: 2, senderName: 'Admin System', subject: 'Schedule Change Approved', preview: 'Your schedule change request for next week has been approved.', content: 'Your schedule change request for next week has been approved. The new schedule will take effect from Monday.', date: new Date('2024-12-16T09:15:00'), read: false, type: 'admin' },
        { id: 3, senderName: 'Fatima Benali', subject: 'Thank you', preview: 'Thank you for the consultation yesterday...', content: 'Thank you for the consultation yesterday. I feel much better already and the treatment is working well.', date: new Date('2024-12-15T16:45:00'), read: true, type: 'patient' },
        { id: 4, senderName: 'System', subject: 'New Appointment', preview: 'New appointment scheduled with Ahmed Tazi for tomorrow at 10:00', content: 'New appointment scheduled with Ahmed Tazi for tomorrow at 10:00 AM. Patient notes: Follow-up consultation for hypertension.', date: new Date('2024-12-15T14:20:00'), read: true, type: 'system' },
        { id: 5, senderName: 'Sara Idrissi', subject: 'Prescription renewal', preview: 'I need to renew my prescription for...', content: 'I need to renew my prescription for Sumatriptan. I\'m running low and have been getting migraines again.', date: new Date('2024-12-14T11:00:00'), read: true, type: 'patient' }
    ];

    get unreadCount(): number {
        return this.messages.filter(m => !m.read).length;
    }

    selectMessage(message: Message): void {
        this.selectedMessage = message;
        message.read = true;
    }

    getTypeClass(type: string): string {
        return `type-${type}`;
    }

    openComposeModal(): void {
        this.showComposeModal = true;
        this.newMessage = { recipientId: 0, subject: '', content: '' };
    }

    closeComposeModal(): void {
        this.showComposeModal = false;
    }

    sendMessage(): void {
        if (!this.newMessage.recipientId) {
            alert('Please select a recipient');
            return;
        }
        if (!this.newMessage.subject.trim()) {
            alert('Please enter a subject');
            return;
        }
        if (!this.newMessage.content.trim()) {
            alert('Please write a message');
            return;
        }

        const recipient = this.patients.find(p => p.id === this.newMessage.recipientId);
        if (recipient) {
            // In a real app, this would send to backend
            alert(`Message sent to ${recipient.name}!`);
            this.closeComposeModal();
        }
    }

    sendReply(): void {
        if (this.replyMessage.trim() && this.selectedMessage) {
            alert(`Reply sent to ${this.selectedMessage.senderName}!`);
            this.replyMessage = '';
        }
    }
}
