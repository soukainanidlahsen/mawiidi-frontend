import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Notification {
  id: number;
  title: string;
  message: string;
  date: Date;
  read: boolean;
  type: 'info' | 'success' | 'warning';
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [];

  ngOnInit(): void {
    // Mock data
    this.notifications = [
      {
        id: 1,
        title: 'Appointment Confirmed',
        message: 'Your appointment with Dr. Sarah Connor is confirmed for tomorrow at 10:00 AM.',
        date: new Date(),
        read: false,
        type: 'success'
      },
      {
        id: 2,
        title: 'Welcome to Mawiidi',
        message: 'Thank you for registering with Mawiidi. Complete your profile to get started.',
        date: new Date(Date.now() - 86400000), // Yesterday
        read: true,
        type: 'info'
      }
    ];
  }

  markAsRead(id: number): void {
    const notif = this.notifications.find(n => n.id === id);
    if (notif) {
      notif.read = true;
    }
  }

  deleteNotification(id: number): void {
    this.notifications = this.notifications.filter(n => n.id !== id);
  }
}
