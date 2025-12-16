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
import { PortalSelectorComponent } from './components/portal-selector/portal-selector.component';
import { DoctorLandingComponent } from './components/doctor/doctor-landing/doctor-landing.component';
import { DoctorLayoutComponent } from './components/doctor/doctor-layout/doctor-layout.component';
import { DoctorPlanningComponent } from './components/doctor/doctor-planning/doctor-planning.component';
import { DoctorPatientsComponent } from './components/doctor/doctor-patients/doctor-patients.component';
import { DoctorConsultationsComponent } from './components/doctor/doctor-consultations/doctor-consultations.component';
import { DoctorMessagingComponent } from './components/doctor/doctor-messaging/doctor-messaging.component';
import { DoctorNotificationsComponent } from './components/doctor/doctor-notifications/doctor-notifications.component';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { AdminStructuresComponent } from './components/admin/admin-structures/admin-structures.component';
import { AdminAppointmentsComponent } from './components/admin/admin-appointments/admin-appointments.component';
import { AdminPlanningComponent } from './components/admin/admin-planning/admin-planning.component';
import { AdminComplaintsComponent } from './components/admin/admin-complaints/admin-complaints.component';
import { AdminSettingsComponent } from './components/admin/admin-settings/admin-settings.component';
import { AdminSecurityComponent } from './components/admin/admin-security/admin-security.component';
import { AdminLandingComponent } from './components/admin/admin-landing/admin-landing.component';

export const routes: Routes = [
    // Portal Selector - Root
    { path: '', component: PortalSelectorComponent },

    // User/Patient Landing
    { path: 'user', component: LandingComponent },

    // Doctor Portal Landing
    { path: 'doctor-portal', component: DoctorLandingComponent },

    // Admin Portal Landing
    { path: 'admin-portal', component: AdminLandingComponent },

    // Authentication
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // Patient Dashboard (protected)
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

    // Doctor Dashboard (protected)
    {
        path: 'doctor',
        component: DoctorLayoutComponent,
        canActivate: [roleGuard],
        data: { roles: ['DOCTOR'] },
        children: [
            { path: '', component: DoctorDashboardComponent },
            { path: 'planning', component: DoctorPlanningComponent },
            { path: 'patients', component: DoctorPatientsComponent },
            { path: 'consultations', component: DoctorConsultationsComponent },
            { path: 'messaging', component: DoctorMessagingComponent },
            { path: 'notifications', component: DoctorNotificationsComponent }
        ]
    },

    // Admin Dashboard (protected)
    {
        path: 'admin',
        component: AdminLayoutComponent,
        canActivate: [roleGuard],
        data: { roles: ['ADMIN'] },
        children: [
            { path: '', component: AdminDashboardComponent },
            { path: 'structures', component: AdminStructuresComponent },
            { path: 'appointments', component: AdminAppointmentsComponent },
            { path: 'planning', component: AdminPlanningComponent },
            { path: 'complaints', component: AdminComplaintsComponent },
            { path: 'settings', component: AdminSettingsComponent },
            { path: 'security', component: AdminSecurityComponent }
        ]
    },

    // Fallback
    { path: '**', redirectTo: '' }
];

