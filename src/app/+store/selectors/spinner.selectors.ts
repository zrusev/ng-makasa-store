import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ISpinnerState } from '../state/spinner.state';
import { IAppState } from '../state/app.state';

export const selectSpinner = (state: IAppState) => state.spinner;

export const isLoadingSpinnerActive = createSelector(
    selectSpinner,
    (state: ISpinnerState) => state.spinner.active
);
