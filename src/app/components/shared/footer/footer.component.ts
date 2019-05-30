import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear: number;
  languages = [];
  selectedLanguage = '';

  constructor(private languageService: LanguageService) {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit() {
    this.languages = this.languageService.getLanguages();
    this.selectedLanguage = this.languages.filter((lng) => lng.value === this.languageService.selected)[0].value;
  }

  selectLanguage(lng) {
    this.languageService.setLanguage(lng);
  }
}
