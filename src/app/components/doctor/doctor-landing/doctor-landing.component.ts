import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import { TranslationService, Lang } from '../../../services/i18n/translation.service';

@Component({
    selector: 'app-doctor-landing',
    standalone: true,
    imports: [CommonModule, RouterLink, TranslatePipe],
    templateUrl: './doctor-landing.component.html',
    styleUrl: './doctor-landing.component.scss'
})
export class DoctorLandingComponent {
    currentYear = new Date().getFullYear();

    constructor(public translationService: TranslationService) { }

    switchLang(lang: Lang) {
        this.translationService.setLanguage(lang);
    }

    get currentLang(): Lang {
        return this.translationService.getCurrentLang();
    }
}
