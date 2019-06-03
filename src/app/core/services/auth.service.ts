import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { User } from '../models/user';

@Injectable()
export class AuthService {
  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
    this.user$ = this.afAuth.authState
      .pipe(switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      }
      ));
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate([ '/' ]);
  }

  updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      ...user,
      roles: { reader: true }
    };
    return userRef.set(data, { merge: true });
  }

  canRead(user: User): boolean {
    const allowed = ['reader', 'writer', 'admin'];
    return this.checkAuthorization(user, allowed);
  }

  canEdit(user: User): boolean {
    const allowed = ['writer', 'admin'];
    return this.checkAuthorization(user, allowed);
  }

  canDelete(user: User): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }

  checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) {
      return false;
    }

    for (const role of allowedRoles) {
      if ( user.roles[role] ) {
        return true;
      }
    }
    return false;
  }
}
