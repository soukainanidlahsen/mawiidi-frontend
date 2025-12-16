import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService, Lang } from '../../services/i18n/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [CommonModule, RouterLink, TranslatePipe],
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
    currentYear = new Date().getFullYear();
    translationService = inject(TranslationService);

    constructor() {
        // Set default language to Arabic as requested
        this.translationService.setLanguage('ar');
    }

    switchLang(lang: string) {
        this.translationService.setLanguage(lang as Lang);
    }

    get currentLang() {
        return this.translationService.getCurrentLang();
    }
}
