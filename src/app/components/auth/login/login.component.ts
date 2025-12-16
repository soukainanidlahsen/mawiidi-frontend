import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService, LoginRequest } from '../../../services/auth/auth.service';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import { TranslationService, Lang } from '../../../services/i18n/translation.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, TranslatePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginRequest: LoginRequest = { email: '', password: '' };
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

    this.authService.login(this.loginRequest).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        // Redirect based on role
        if (response.role === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else if (response.role === 'DOCTOR') {
          this.router.navigate(['/doctor']);
        } else {
          this.router.navigate(['/patient']);
        }
      },
      error: (err: any) => {
        this.isLoading = false;
        this.errorMessage = 'Invalid email or password';
        console.error(err);
      }
    });
  }
}
