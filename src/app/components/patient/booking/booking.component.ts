import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DoctorService, Doctor } from '../../../services/doctor/doctor.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit {
  doctors: Doctor[] = [];
  filteredDoctors: Doctor[] = [];

  searchCity: string = '';
  searchSpecialty: string = '';

  cities: string[] = ['Casablanca', 'Rabat', 'Marrakech', 'Tangier'];
  specialties: string[] = ['Cardiology', 'Dermatology', 'General', 'Pediatrics'];

  selectedDoctor: Doctor | null = null;
  selectedDate: string = '';
  selectedTime: string = '';

  availableSlots: string[] = ['09:00', '09:30', '10:00', '10:30', '11:00', '14:00', '14:30', '15:00'];

  step: number = 1; // 1: Search, 2: Select Slot, 3: Confirm

  minDate: string = '';
  maxDate: string = '';

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.loadDoctors();
    this.calculateDateLimits();
  }

  calculateDateLimits(): void {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];

    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);
    this.maxDate = nextWeek.toISOString().split('T')[0];
  }

  loadDoctors(): void {
    this.doctorService.getAllDoctors().subscribe(data => {
      this.doctors = data;
      this.filteredDoctors = data;
    });
  }

  filterDoctors(): void {
    this.filteredDoctors = this.doctors.filter(doc => {
      const matchCity = this.searchCity ? doc.city === this.searchCity : true;
      const matchSpecialty = this.searchSpecialty ? doc.specialty === this.searchSpecialty : true;
      return matchCity && matchSpecialty;
    });
  }

  selectDoctor(doctor: Doctor): void {
    this.selectedDoctor = doctor;
    this.step = 2;
  }

  confirmBooking(): void {
    // Call API to create appointment
    console.log('Booking confirmed for', this.selectedDoctor, this.selectedDate, this.selectedTime);
    alert('Appointment Confirmed!');
    this.step = 1;
    this.selectedDoctor = null;
    this.selectedDate = '';
    this.selectedTime = '';
  }

  back(): void {
    if (this.step > 1) this.step--;
  }
}
