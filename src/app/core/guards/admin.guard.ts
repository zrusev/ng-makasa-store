import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanLoad {

  constructor(private auth: AuthService) { }

    canLoad(route: Route,
            segments: UrlSegment[]): Observable<boolean> {

      return this.auth.user$.pipe(
        take(1),
        map(user => user && user.roles.admin ? true : false),
        tap(isAdmin => {
          if (!isAdmin) {
            console.error('Access denied - Admins only');
          }
        })
      );
    }
}
