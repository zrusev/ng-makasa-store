import { Component } from '@angular/core';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private languageService: LanguageService) {
      this.languageService.setInitialAppLanguage();
    }
}
