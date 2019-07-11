import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { switchMap, catchError, timeoutWith } from 'rxjs/operators';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { EPromotionActions,
         GetPromotions,
         GetPromotionsSuccess,
         GetPromotion,
         GetPromotionSuccess,
         GetPromotionsFailure} from '../actions/promotion.action';
import { AddGlobalError } from '../actions/error.action';
import { PromotionService } from 'src/app/core/services/promotion.service';
import { IPromotion } from 'src/app/core/models/promotion';

@Injectable()
export class PromotionEffects {

    constructor(private promotionService: PromotionService,
                private actions$: Actions) {}

    @Effect()
    getPromotions$: Observable<GetPromotionsFailure | AddGlobalError | GetPromotionsSuccess> = this.actions$.pipe(
        ofType<GetPromotions>(EPromotionActions.GetPromotions),
        switchMap(() =>
            this.promotionService.fetchAllPromotions().pipe(
                // timeoutWith(5000, of(new GetPromotionsFailure())),
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
                switchMap((promotion: IPromotion) => {
                    return of(new GetPromotionSuccess(promotion));
                }),
                catchError(error => of(new AddGlobalError(error)))
            )
        )
    );
}
