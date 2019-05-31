import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, Event, NavigationEnd } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Output() sidenavClose = new EventEmitter<void>();

  constructor(
    public authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private translateService: TranslateService
  ) {
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

    const logoutMessage = this.translateService.instant('profile.logoutMessage');
    this.snackBar.open(logoutMessage, 'OK', {
      duration: 3000
    });
  }
}
