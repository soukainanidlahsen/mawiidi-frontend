import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../pipes/translate.pipe';

interface Message {
    id: number;
    text: string;
    sender: 'patient' | 'doctor';
    timestamp: Date;
}

interface Conversation {
    id: number;
    doctorName: string;
    specialty: string;
    lastMessage: string;
    unread: boolean;
    messages: Message[];
}

@Component({
    selector: 'app-messaging',
    standalone: true,
    imports: [CommonModule, FormsModule, TranslatePipe],
    templateUrl: './messaging.component.html',
    styleUrl: './messaging.component.scss'
})
export class MessagingComponent {
    conversations: Conversation[] = [
        {
            id: 1,
            doctorName: 'Dr. Sarah Connor',
            specialty: 'Cardiology',
            lastMessage: 'Your test results look good.',
            unread: true,
            messages: [
                { id: 1, text: 'Hello Dr. Connor, I have a question about my medication.', sender: 'patient', timestamp: new Date('2024-12-15T10:00:00') },
                { id: 2, text: 'Yes, how can I help you?', sender: 'doctor', timestamp: new Date('2024-12-15T10:05:00') },
                { id: 3, text: 'Should I take it before or after meals?', sender: 'patient', timestamp: new Date('2024-12-15T10:10:00') },
                { id: 4, text: 'Your test results look good. Take it 30 minutes before meals.', sender: 'doctor', timestamp: new Date('2024-12-15T10:15:00') }
            ]
        },
        {
            id: 2,
            doctorName: 'Dr. John Doe',
            specialty: 'General',
            lastMessage: 'See you at your next appointment.',
            unread: false,
            messages: [
                { id: 1, text: 'Thank you for the consultation today.', sender: 'patient', timestamp: new Date('2024-12-14T14:00:00') },
                { id: 2, text: 'You\'re welcome! See you at your next appointment.', sender: 'doctor', timestamp: new Date('2024-12-14T14:10:00') }
            ]
        }
    ];

    selectedConversation: Conversation | null = null;
    newMessage = '';

    selectConversation(conv: Conversation) {
        this.selectedConversation = conv;
        conv.unread = false;
    }

    sendMessage() {
        if (this.newMessage.trim() && this.selectedConversation) {
            this.selectedConversation.messages.push({
                id: this.selectedConversation.messages.length + 1,
                text: this.newMessage,
                sender: 'patient',
                timestamp: new Date()
            });
            this.selectedConversation.lastMessage = this.newMessage;
            this.newMessage = '';
        }
    }

    backToList() {
        this.selectedConversation = null;
    }
}
