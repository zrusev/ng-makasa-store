import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { TranslateCacheService } from 'ngx-translate-cache';

@Injectable ({
    providedIn: 'root'
})
export class LanguageService {
    selected: string;

    constructor(
        private translateService: TranslateService,
        private translateCacheService: TranslateCacheService,
        private ccService: NgcCookieConsentService
    ) { }

    setInitialAppLanguage() {
        this.translateService.addLangs(['bg', 'en']);
        this.translateService.setDefaultLang('bg');

        this.translateCacheService.init();

        const language = this.translateCacheService.getCachedLanguage() || this.translateService.getBrowserLang();
        this.translateService.use(language.match(/bg|en/) ? language : 'bg');
        this.selected = language;

        this.translateCookie();
    }

    getLanguages() {
        return [
            {text: 'БГ', value: 'bg'},
            {text: 'EN', value: 'en'}
        ];
    }

    setLanguage(lng) {
        this.translateService.use(lng);
        this.selected = lng;

        this.translateCookie();
    }

    translateCookie() {
        this.translateService
            .get(['cookie.header',
                  'cookie.message',
                  'cookie.dismiss',
                  'cookie.allow',
                  'cookie.deny',
                  'cookie.link',
                  'cookie.href',
                  'cookie.policy'])
            .subscribe(data => {
                this.ccService.getConfig().content = this.ccService.getConfig().content || {} ;
                this.ccService.getConfig().content.header = data['cookie.header'];
                this.ccService.getConfig().content.message = data['cookie.message'];
                this.ccService.getConfig().content.dismiss = data['cookie.dismiss'];
                this.ccService.getConfig().content.allow = data['cookie.allow'];
                this.ccService.getConfig().content.deny = data['cookie.deny'];
                this.ccService.getConfig().content.link = data['cookie.link'];
                this.ccService.getConfig().content.href = data['cookie.href'];
                this.ccService.getConfig().content.policy = data['cookie.policy'];

                this.ccService.destroy();
                this.ccService.init(this.ccService.getConfig());
            });
    }
}
