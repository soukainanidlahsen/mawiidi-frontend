import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService, RegisterRequest } from '../../../services/auth/auth.service';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import { TranslationService, Lang } from '../../../services/i18n/translation.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TranslatePipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerRequest: RegisterRequest = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'PATIENT'
  };
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    public translationService: TranslationService
  ) { }

  switchLang(lang: Lang) {
    this.translationService.setLanguage(lang);
  }

  get currentLang(): Lang {
    return this.translationService.getCurrentLang();
  }

  onSubmit(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.authService.register(this.registerRequest).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        // Auto login or redirect to login
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        this.isLoading = false;
        this.errorMessage = 'Registration failed. Please try again.';
        console.error(err);
      }
    });
  }
}
