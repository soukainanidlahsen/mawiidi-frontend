import { Pipe, PipeTransform, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { TranslationService } from '../services/i18n/translation.service';
import { effect } from '@angular/core';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false // Impure to update when language changes
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private lastValue = '';
  private lastKey = '';
  private effectRef: any;

  constructor(
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef
  ) {
    // React to language changes
    this.effectRef = effect(() => {
      // Access the signal to trigger reactivity
      const lang = this.translationService.currentLang$();
      // Force change detection when language changes
      if (this.lastKey) {
        this.lastValue = this.translationService.translate(this.lastKey);
        this.cdr.markForCheck();
      }
    });
  }

  transform(key: string): string {
    this.lastKey = key;
    this.lastValue = this.translationService.translate(key);
    return this.lastValue;
  }

  ngOnDestroy(): void {
    // Effect cleanup is handled automatically by Angular
  }
}
