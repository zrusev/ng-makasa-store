import { Action } from '@ngrx/store';
import { IPromotion } from 'src/app/core/models/promotion';
import { HideLoader, ShowLoader } from 'src/app/core/decorators/spinner.decorator';

export enum EPromotionActions {
    GetPromotions = '[Promotion] Get Promotions',
    GetPromotionsSuccess = '[Promotion] Get Promotions Success',
    GetPromotionsFailure = '[Promotion] Get Promotions Failure',
    GetPromotion = '[Promotion] Get Promotion',
    GetPromotionSuccess = '[Promotion] Get Promotion Success',
    GetPromotionFailure = '[Promotion] Get Promotion Failure',
}

@ShowLoader()
export class GetPromotions implements Action {
    public readonly type = EPromotionActions.GetPromotions;
}

@HideLoader(EPromotionActions.GetPromotions)
export class GetPromotionsSuccess implements Action {
    public readonly type = EPromotionActions.GetPromotionsSuccess;
    constructor(public payload: IPromotion[]) {}
}

@HideLoader(EPromotionActions.GetPromotions)
export class GetPromotionsFailure implements Action {
    public readonly type = EPromotionActions.GetPromotionsFailure;
    constructor() {}
}

@ShowLoader()
export class GetPromotion implements Action {
    public readonly type = EPromotionActions.GetPromotion;
    constructor(public payload: string) {}
}

@HideLoader(EPromotionActions.GetPromotion)
export class GetPromotionSuccess implements Action {
    public readonly type = EPromotionActions.GetPromotionSuccess;
    constructor(public payload: IPromotion) {}
}

@HideLoader(EPromotionActions.GetPromotion)
export class GetPromotionFailure implements Action {
    public readonly type = EPromotionActions.GetPromotionFailure;
    constructor() {}
}

export type PromotionActions = GetPromotions |
                               GetPromotionsSuccess |
                               GetPromotionsFailure |
                               GetPromotion |
                               GetPromotionSuccess |
                               GetPromotionFailure;
