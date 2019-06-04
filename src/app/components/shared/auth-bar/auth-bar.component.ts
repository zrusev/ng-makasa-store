import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auth-bar',
  templateUrl: './auth-bar.component.html',
  styleUrls: ['./auth-bar.component.css']
})
export class AuthBarComponent implements OnInit {
  isAdmin: boolean;

  constructor(public authService: AuthService,
              private snackBar: MatSnackBar,
              private translateService: TranslateService) {
    this.isAdmin = false;
  }

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      if (user && user.roles && this.authService.canDelete(user)) {
        this.isAdmin = true;
      }
    });
  }

  logout() {
    this.authService.logout();
    this.isAdmin = false;

    const logoutMessage = this.translateService.instant('profile.logoutMessage');
    this.snackBar.open(logoutMessage, 'OK', {
      duration: 3000
    });
  }
}
