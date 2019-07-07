import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IAppState } from 'src/app/+store/state/app.state';
import { AddGlobalError } from 'src/app/+store/actions/error.action';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private store: Store<IAppState>) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.store.dispatch(new AddGlobalError(error));
          return throwError(error);
        })
      );
  }
}
