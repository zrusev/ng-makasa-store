import { IPromotionState, initialPromotionsState } from '../state/promotion.state';
import { PromotionActions, EPromotionActions } from '../actions/promotion.action';

export function promotionReducers(
    state = initialPromotionsState,
    action: PromotionActions
): IPromotionState {
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
        case EPromotionActions.GetPromotionsFailure: {
            return {
                ...state,
                promotions: []
            };
        }
        default:
            return state;
    }
}
