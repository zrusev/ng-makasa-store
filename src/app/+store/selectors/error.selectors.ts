import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IErrorState } from '../state/error.state';

const selectError = (state: IAppState) => state.error;

export const selectGlobalError = createSelector(
    selectError,
    (state: IErrorState) => state.error
);
