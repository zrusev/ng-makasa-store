import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { EPromotionActions,
         GetPromotions,
         GetPromotionsSuccess,
         GetPromotion,
         GetPromotionSuccess } from '../actions/promotion.action';
import { PromotionService } from 'src/app/core/services/promotion.service';
import { ListPromotion } from 'src/app/core/models/list-promotion';

@Injectable()
export class PromotionEffects {

    constructor(private promotionService: PromotionService,
                private actions$: Actions,
                private store: Store<IAppState>) {}

    @Effect()
    getPromotions$ = this.actions$.pipe(
        ofType<GetPromotions>(EPromotionActions.GetPromotions),
        switchMap(() => this.promotionService.fetchAllPromotions()),
        switchMap((promotions: ListPromotion[]) => of(new GetPromotionsSuccess(promotions)))
    );

    @Effect()
    getPromotion$ = this.actions$.pipe(
        ofType<GetPromotion>(EPromotionActions.GetPromotion),
        switchMap(action => this.promotionService.fetchPromotion(action.payload)),
        switchMap((promotion: ListPromotion) => of(new GetPromotionSuccess(promotion)))
    );
}
