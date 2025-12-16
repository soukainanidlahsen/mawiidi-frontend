import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { PatientDashboardComponent } from './components/patient/patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './components/doctor/doctor-dashboard/doctor-dashboard.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { roleGuard } from './services/auth/role.guard';
import { PatientLayoutComponent } from './components/patient/patient-layout/patient-layout.component';
import { BookingComponent } from './components/patient/booking/booking.component';
import { MyAppointmentsComponent } from './components/patient/my-appointments/my-appointments.component';
import { MedicalRecordComponent } from './components/patient/medical-record/medical-record.component';
import { ProfileComponent } from './components/patient/profile/profile.component';
import { NotificationsComponent } from './components/patient/notifications/notifications.component';
import { ComplaintsComponent } from './components/patient/complaints/complaints.component';
import { MessagingComponent } from './components/patient/messaging/messaging.component';
import { LandingComponent } from './components/landing/landing.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'patient',
        component: PatientLayoutComponent,
        canActivate: [roleGuard],
        data: { roles: ['PATIENT'] },
        children: [
            { path: '', component: PatientDashboardComponent },
            { path: 'booking', component: BookingComponent },
            { path: 'appointments', component: MyAppointmentsComponent },
            { path: 'medical-records', component: MedicalRecordComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'notifications', component: NotificationsComponent },
            { path: 'complaints', component: ComplaintsComponent },
            { path: 'messaging', component: MessagingComponent }
        ]
    },
    {
        path: 'doctor',
        component: DoctorDashboardComponent,
        canActivate: [roleGuard],
        data: { roles: ['DOCTOR'] }
    },
    {
        path: 'admin',
        component: AdminDashboardComponent,
        canActivate: [roleGuard],
        data: { roles: ['ADMIN'] }
    },
    { path: '', component: LandingComponent },
    { path: '**', redirectTo: '/login' }
];
