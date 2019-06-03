import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit, DoCheck {
  loggedUserName: string;
  isEmailVerified: boolean;
  providers = AuthProvider;

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.loggedUserName = null;
  }

  ngDoCheck() {
    if (this.loggedUserName !== null && this.isEmailVerified) {
      this.router.navigate(['/home']);
    }
  }

  catchSuccess(event) {
    this.loggedUserName = event.displayName;
    this.isEmailVerified = event.emailVerified;

    this.authService.user$.subscribe((user) => {
      if (user && !user.roles && !event.emailVerified) {
        const roles = { reader: true };
        this.authService.updateUserData(user, roles);
      }
    });
  }
}
