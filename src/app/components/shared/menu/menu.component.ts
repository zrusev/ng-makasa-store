import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Output() sidenavClose = new EventEmitter<void>();

  constructor(public authService: AuthService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.closeNavbar();
      }
    });
   }

   closeNavbar() {
    this.sidenavClose.emit();
   }

  logout() {
    this.authService.logout();
  }
}
