import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  loggedUserName: string;

  constructor(private router: Router) { }

  catchSuccess(event) {
    this.loggedUserName = event.displayName;
    this.router.navigate(['/home']);
  }
}
