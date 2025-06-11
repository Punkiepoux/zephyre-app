import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'zephyre-app';
  currentRoute: string = '';

  constructor(private router: Router) {}
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
}

/*const routePaths = routes
  .filter((route) => route.path != '**')
  .map((route) => route.path);*/
