import { TranslatePipe } from './translate.pipe';
import { TranslationService } from '../services/i18n/translation.service';

describe('TranslatePipe', () => {
  it('create an instance', () => {
    const translationService = new TranslationService();
    const pipe = new TranslatePipe(translationService);
    expect(pipe).toBeTruthy();
  });
});
