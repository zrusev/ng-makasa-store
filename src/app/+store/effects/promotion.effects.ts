import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { EPromotionActions,
         GetPromotions,
         GetPromotionsSuccess,
         GetPromotion,
         GetPromotionSuccess} from '../actions/promotion.action';
import { PromotionService } from 'src/app/core/services/promotion.service';
import { IPromotion } from 'src/app/core/models/promotion';
import { AddGlobalError } from '../actions/error.action';

@Injectable()
export class PromotionEffects {

    constructor(private promotionService: PromotionService,
                private actions$: Actions,
                private store: Store<IAppState>) {}

    @Effect()
    getPromotions$: Observable<AddGlobalError | GetPromotionsSuccess> = this.actions$.pipe(
        ofType<GetPromotions>(EPromotionActions.GetPromotions),
        switchMap(() =>
            this.promotionService.fetchAllPromotions().pipe(
                switchMap((promotions: IPromotion[]) => of(new GetPromotionsSuccess(promotions))),
                catchError((error: any) => of(new AddGlobalError(error)))
            )
        )
    );

    @Effect()
    getPromotion$: Observable<AddGlobalError | GetPromotionSuccess> = this.actions$.pipe(
        ofType<GetPromotion>(EPromotionActions.GetPromotion),
        switchMap(action =>
            this.promotionService.fetchPromotion(action.payload).pipe(
                switchMap((promotion: IPromotion) => of(new GetPromotionSuccess(promotion))),
                catchError(error => of(new AddGlobalError(error)))
            )
        )
    );
}
