import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService, Lang } from '../../services/i18n/translation.service';

@Component({
    selector: 'app-portal-selector',
    standalone: true,
    imports: [CommonModule, RouterLink, TranslatePipe],
    templateUrl: './portal-selector.component.html',
    styleUrl: './portal-selector.component.scss'
})
export class PortalSelectorComponent {
    constructor(public translationService: TranslationService) { }

    switchLang(lang: Lang) {
        this.translationService.setLanguage(lang);
    }

    get currentLang(): Lang {
        return this.translationService.getCurrentLang();
    }
}
