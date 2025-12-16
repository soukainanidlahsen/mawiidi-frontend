import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MedicalRecord {
  id: number;
  doctorName: string;
  specialty: string;
  lastVisit: string;
  diagnosis: string;
  prescription: string;
}

@Component({
  selector: 'app-medical-record',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medical-record.component.html',
  styleUrl: './medical-record.component.scss'
})
export class MedicalRecordComponent implements OnInit {
  records: MedicalRecord[] = [];

  ngOnInit(): void {
    // Mock data for now
    this.records = [
      {
        id: 1,
        doctorName: 'Dr. Sarah Connor',
        specialty: 'Cardiology',
        lastVisit: '2023-11-15',
        diagnosis: 'Mild Hypertension',
        prescription: 'Lisinopril 10mg'
      },
      {
        id: 2,
        doctorName: 'Dr. John Smith',
        specialty: 'Dermatology',
        lastVisit: '2023-10-01',
        diagnosis: 'Eczema',
        prescription: 'Hydrocortisone Cream'
      }
    ];
  }
}
