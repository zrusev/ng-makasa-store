import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { switchMap, catchError, timeout } from 'rxjs/operators';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { EPromotionActions,
         GetPromotions,
         GetPromotionsSuccess,
         GetPromotion,
         GetPromotionSuccess,
         GetPromotionsFailure,
         GetPromotionFailure} from '../actions/promotion.action';
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
                switchMap((promotions: IPromotion[]) => of(new GetPromotionsSuccess(promotions)).pipe(
                    timeout(10000),
                    catchError((error: any) => of(
                        new GetPromotionsFailure(),
                        new AddGlobalError(error)
                    ))
                ))
            )
        )
    );

    @Effect()
    getPromotion$: Observable<GetPromotionFailure | AddGlobalError | GetPromotionSuccess> = this.actions$.pipe(
        ofType<GetPromotion>(EPromotionActions.GetPromotion),
        switchMap((action) =>
            this.promotionService.fetchPromotion(action.payload).pipe(
                switchMap((promotion: IPromotion) => of(new GetPromotionSuccess(promotion)).pipe(
                    timeout(10000),
                    catchError(error => of(
                        new GetPromotionFailure(),
                        new AddGlobalError(error)
                    ))
                ))
            )
        )
    );
}
