import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { User } from '../models/user';

import { BehaviorSubject, Observable } from 'rxjs';

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private snackbar: MatSnackBar
  ) { 
    this.user = afAuth.authState;
  }

  signup(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate([ '/login' ]);
      })
      .catch((error) => {
        this.snackbar.open(error.message, 'Undo', {
          duration: 3000
        });
      });
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((userData) => {
        this.router.navigate([ '/user' ]);
        localStorage.setItem('email', userData.user.email);
      })
      .catch((error) => {
        this.snackbar.open(error.message, 'Undo', {
          duration: 3000
        });
      });
  }

  logout() {
    this.afAuth
      .auth
      .signOut();

    this.router.navigate([ '/' ]);
  }
}
