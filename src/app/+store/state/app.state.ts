import { RouterReducerState } from '@ngrx/router-store';
import { IErrorState, initialErrorState } from './error.state';
import { IPromotionState, initialPromotionsState } from './promotion.state';
import { ISpinnerState, initialSpinnerState } from './spinner.state';

export interface IAppState {
    router?: RouterReducerState;
    promoter: IPromotionState;
    global: IErrorState;
    loader: ISpinnerState;
}

export const initialAppState: IAppState = {
    promoter: initialPromotionsState,
    global: initialErrorState,
    loader: initialSpinnerState
};
