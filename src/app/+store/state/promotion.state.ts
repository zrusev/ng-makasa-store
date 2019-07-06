import { ListPromotion } from 'src/app/core/models/list-promotion';

export interface IPromotionState {
    promotions: ListPromotion[];
    selectedPromotion: ListPromotion;
}

export const initialPromotionsState: IPromotionState = {
    promotions: [],
    selectedPromotion: null
};

