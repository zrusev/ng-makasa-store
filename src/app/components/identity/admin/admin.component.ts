import { Component } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  user: User;

  constructor(public authService: AuthService) {
    this.authService.user$.subscribe(user => this.user = user);
  }

  editToDo() {
    if (this.authService.canEdit(this.user)) {
      console.error('edited!');
    } else {
      console.error('you are not allowed to do that!');
    }
  }

  deleteToDo() {
    if (this.authService.canEdit(this.user)) {
      console.error('deleted!');
    } else {
      console.error('you are not allowed to do that!');
    }
  }
}
