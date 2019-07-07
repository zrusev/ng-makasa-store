import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { AddGlobalError, EError } from '../actions/error.action';
import { switchMap, tap } from 'rxjs/operators';
import { NotificationService } from 'src/app/core/services/notificationService.service';

@Injectable()
export class ErrorEffects {
    constructor(private actions$: Actions,
                private notificationService: NotificationService) {}

    @Effect()
    getError$: Observable<any> = this.actions$.pipe(
        ofType<AddGlobalError>(EError.AddError),
        switchMap((error: AddGlobalError) => {
            this.notificationService.showError(error.payload.message);
            return of({type: 'noop'});
        })
    );
}
