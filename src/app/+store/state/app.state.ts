import { RouterReducerState } from '@ngrx/router-store';
import { IErrorState, initialErrorState } from './error.state';
import { IPromotionState, initialPromotionsState } from './promotion.state';

export interface IAppState {
    router?: RouterReducerState;
    promotions: IPromotionState;
    error: IErrorState;
}

export const initialAppState: IAppState = {
    promotions: initialPromotionsState,
    error: initialErrorState
};
