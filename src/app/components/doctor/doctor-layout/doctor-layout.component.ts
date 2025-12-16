import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
    selector: 'app-doctor-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, TranslatePipe],
    templateUrl: './doctor-layout.component.html',
    styleUrl: './doctor-layout.component.scss'
})
export class DoctorLayoutComponent {
    constructor(private authService: AuthService) { }

    logout(): void {
        this.authService.logout();
    }
}
