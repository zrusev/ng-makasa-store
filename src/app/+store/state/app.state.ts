import { RouterReducerState } from '@ngrx/router-store';
import { IErrorState, initialErrorState } from './error.state';
import { IPromotionState, initialPromotionsState } from './promotion.state';
import { ISpinnerState, initialSpinnerState } from './spinner.state';

export interface IAppState {
    router?: RouterReducerState;
    promotions: IPromotionState;
    error: IErrorState;
    spinner: ISpinnerState;
}

export const initialAppState: IAppState = {
    promotions: initialPromotionsState,
    error: initialErrorState,
    spinner: initialSpinnerState
};
