import { Component } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private ccService: NgcCookieConsentService,
    private languageService: LanguageService
  ) {
      this.languageService.setInitialAppLanguage();
    }
}
