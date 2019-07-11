import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IPromotionState } from '../state/promotion.state';

const selectPromotions = (state: IAppState) => state.promoter;

export const selectPromotionsList = createSelector(
    selectPromotions,
    (state: IPromotionState) => state.promotions
);

export const selectSelectedPromotion = createSelector(
    selectPromotions,
    (state: IPromotionState) => state.selectedPromotion
);

