import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/i18n/translation.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false // Impure to update when signal changes (though signal usage might require different approach, this is simple)
})
export class TranslatePipe implements PipeTransform {

  constructor(private translationService: TranslationService) { }

  transform(value: string): string {
    return this.translationService.translate(value);
  }

}
