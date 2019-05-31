import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(
    public authService: AuthService,
    private snackBar: MatSnackBar,
    private translateService: TranslateService
  ) { }

  logout() {
    this.authService.logout();

    const logoutMessage = this.translateService.instant('profile.logoutMessage');
    this.snackBar.open(logoutMessage, 'OK', {
      duration: 3000
    });
  }
}
