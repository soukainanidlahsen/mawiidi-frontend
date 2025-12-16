import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimeSlot {
    time: string;
    patient?: string;
    type?: string;
    status: 'available' | 'booked' | 'blocked';
}

interface DaySchedule {
    date: Date;
    slots: TimeSlot[];
}

@Component({
    selector: 'app-doctor-planning',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './doctor-planning.component.html',
    styleUrl: './doctor-planning.component.scss'
})
export class DoctorPlanningComponent {
    currentWeek: Date[] = [];
    selectedDate: Date = new Date();

    timeSlots: string[] = [
        '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
        '11:00', '11:30', '12:00', '14:00', '14:30', '15:00',
        '15:30', '16:00', '16:30', '17:00'
    ];

    schedule: Map<string, TimeSlot[]> = new Map();

    constructor() {
        this.generateWeek();
        this.generateMockSchedule();
    }

    generateWeek(): void {
        const today = new Date();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay() + 1); // Monday

        this.currentWeek = [];
        for (let i = 0; i < 7; i++) {
            const day = new Date(startOfWeek);
            day.setDate(startOfWeek.getDate() + i);
            this.currentWeek.push(day);
        }
    }

    generateMockSchedule(): void {
        this.currentWeek.forEach(day => {
            const dayKey = this.formatDateKey(day);
            const slots: TimeSlot[] = this.timeSlots.map(time => {
                const random = Math.random();
                if (random < 0.3) {
                    return { time, status: 'booked' as const, patient: 'Mohammed Alami', type: 'Consultation' };
                } else if (random < 0.4) {
                    return { time, status: 'blocked' as const };
                }
                return { time, status: 'available' as const };
            });
            this.schedule.set(dayKey, slots);
        });
    }

    formatDateKey(date: Date): string {
        return date.toISOString().split('T')[0];
    }

    getSlots(date: Date): TimeSlot[] {
        return this.schedule.get(this.formatDateKey(date)) || [];
    }

    selectDate(date: Date): void {
        this.selectedDate = date;
    }

    isSelectedDate(date: Date): boolean {
        return this.formatDateKey(date) === this.formatDateKey(this.selectedDate);
    }

    isToday(date: Date): boolean {
        return this.formatDateKey(date) === this.formatDateKey(new Date());
    }

    getSlotClass(slot: TimeSlot): string {
        return `slot-${slot.status}`;
    }
}
