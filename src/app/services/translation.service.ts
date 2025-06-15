import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private language = new BehaviorSubject<string>('fr');
  private translations: any = {};

  constructor(private http: HttpClient) {
    this.loadTranslations('fr');
  }

  setLanguage(lang: string) {
    this.language.next(lang);
    this.loadTranslations(lang);
  }

  getCurrentLanguage() {
    return this.language.value;
  }

  loadTranslations(lang: string) {
    this.http.get(`assets/i18n/${lang}.json`).subscribe((data: any) => {
      this.translations = data;
    });
  }

  translate(key: string): string {
    return key.split('.').reduce((obj, k) =>
      (obj && obj[k] !== undefined ? obj[k] : null), this.translations) || key;
  }
}
