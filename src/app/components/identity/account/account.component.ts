import { Component, OnInit, DoCheck} from '@angular/core';
import { Router } from '@angular/router';
import { AuthProvider } from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit, DoCheck {
  loggedUserName: string;
  providers = AuthProvider;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loggedUserName = null;
  }

  ngDoCheck() {
    if (this.loggedUserName !== null) {
      this.router.navigate(['/home']);
    }
  }

  catchSuccess(event) {
    this.loggedUserName = event.displayName;
  }
}
