import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  languages = [];
  selectedLanguage = '';

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languages = this.languageService.getLanguages();
    this.selectedLanguage = this.languages.filter((lng) => lng.value === this.languageService.selected)[0].value;
  }

  selectLanguage(lng) {
    this.languageService.setLanguage(lng);
  }
}
