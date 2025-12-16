import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../pipes/translate.pipe';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  profile: UserProfile = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: ''
  };

  isEditing: boolean = false;

  ngOnInit(): void {
    // Mock data
    this.profile = {
      firstName: 'Ahmed',
      lastName: 'Benali',
      email: 'patient@mawiidi.com',
      phone: '+212 600 000 000',
      address: '123 Rue Hassan II',
      city: 'Casablanca'
    };
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  saveProfile(): void {
    // Call API to update profile
    console.log('Profile updated:', this.profile);
    this.isEditing = false;
    alert('Profile updated successfully!');
  }
}
