import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable ()
export class LanguageService {
    selected: string;

    constructor(private translate: TranslateService) { }

    setInitialAppLanguage() {
      const language = this.translate.getBrowserLang();
      this.translate.setDefaultLang(language);
      this.selected = language;

      //TODO: get from rdx storage
      //this.setLanguage(lng)
    }

    getLanguages() {
        return [
            {text: 'Български', value: 'bg'},
            {text: 'English', value: 'en'}
        ]
    }

    setLanguage(lng) {
        this.translate.use(lng);
        this.selected = lng;
        //TODO: add to rgx storage
    }
}
