import { Action } from '@ngrx/store';
import { IPromotion } from 'src/app/core/models/promotion';

export enum EPromotionActions {
    GetPromotions = '[Promotion] Get Promotions',
    GetPromotionsSuccess = '[Promotion] Get Promotions Success',
    GetPromotion = '[Promotion] Get Promotion',
    GetPromotionSuccess = '[Promotion] Get Promotion Success'
}

export class GetPromotions implements Action {
    public readonly type = EPromotionActions.GetPromotions;
}

export class GetPromotionsSuccess implements Action {
    public readonly type = EPromotionActions.GetPromotionsSuccess;
    constructor(public payload: IPromotion[]) {}
}

export class GetPromotion implements Action {
    public readonly type = EPromotionActions.GetPromotion;
    constructor(public payload: string) {}
}

export class GetPromotionSuccess implements Action {
    public readonly type = EPromotionActions.GetPromotionSuccess;
    constructor(public payload: IPromotion) {}
}

export type PromotionActions = GetPromotions | GetPromotionsSuccess | GetPromotion | GetPromotionSuccess;
