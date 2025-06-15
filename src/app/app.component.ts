import { TranslationService } from './services/translation.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { TranslatePipe } from './pipes/translate.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'zephyre-app';
  currentRoute: string = '';
  currentLang: string = 'fr';

  constructor(private router: Router, private translationService: TranslationService) {}
  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects.replace(/^\/|\/$/g, '');
        console.log('Current route:', this.currentRoute);
      });
  }

  isActive(path: string): boolean {
    return this.currentRoute === path;
  }

  setLanguage(lang: string) {
    this.translationService.setLanguage(lang);
    this.currentLang = lang;
    console.log(this.currentLang);
  }
}

/*const routePaths = routes
  .filter((route) => route.path != '**')
  .map((route) => route.path);*/
