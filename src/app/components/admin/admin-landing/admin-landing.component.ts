import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import { TranslationService, Lang } from '../../../services/i18n/translation.service';

@Component({
    selector: 'app-admin-landing',
    standalone: true,
    imports: [CommonModule, RouterLink, TranslatePipe],
    templateUrl: './admin-landing.component.html',
    styleUrl: './admin-landing.component.scss'
})
export class AdminLandingComponent {
    currentLang: Lang = 'fr';

    constructor(private translationService: TranslationService) {
        this.currentLang = this.translationService.getCurrentLang();
    }

    setLanguage(lang: Lang): void {
        this.translationService.setLanguage(lang);
        this.currentLang = lang;
    }
}
