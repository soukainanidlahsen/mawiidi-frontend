import { Component, computed, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { AiAssistantComponent } from '../ai-assistant/ai-assistant.component';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import { TranslationService, Lang } from '../../../services/i18n/translation.service';

@Component({
  selector: 'app-patient-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, AiAssistantComponent, TranslatePipe],
  templateUrl: './patient-layout.component.html',
  styleUrl: './patient-layout.component.scss'
})
export class PatientLayoutComponent {
  isRtl: Signal<boolean>;

  constructor(
    private authService: AuthService,
    private translationService: TranslationService
  ) {
    // Reactive RTL detection based on language signal
    this.isRtl = computed(() => this.translationService.currentLang$() === 'ar');
  }

  logout(): void {
    this.authService.logout();
  }
}
