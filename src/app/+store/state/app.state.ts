import { RouterReducerState } from '@ngrx/router-store';

import { IPromotionState, initialPromotionsState } from './promotion.state';

export interface IAppState {
    router?: RouterReducerState;
    promotions: IPromotionState;
}

export const initialAppState: IAppState = {
    promotions: initialPromotionsState
};

export function getInitialState(): IAppState {
    return initialAppState;
}
