import { IPromotion } from 'src/app/core/models/promotion';

export interface IPromotionState {
    promotions: IPromotion[];
    selectedPromotion: IPromotion;
}

export const initialPromotionsState: IPromotionState = {
    promotions: [],
    selectedPromotion: null
};

