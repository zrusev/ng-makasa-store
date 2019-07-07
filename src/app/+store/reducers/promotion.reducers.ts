import { IPromotionState, initialPromotionsState } from '../state/promotion.state';
import { PromotionActions, EPromotionActions } from '../actions/promotion.action';

export const promotionReducers = (
    state = initialPromotionsState,
    action: PromotionActions
): IPromotionState => {
    switch (action.type) {
        case EPromotionActions.GetPromotionsSuccess: {
            return {
                ...state,
                promotions: action.payload
            };
        }
        case EPromotionActions.GetPromotionSuccess: {
            return {
                ...state,
                selectedPromotion: action.payload
            };
        }
        default:
            return state;
    }
};
