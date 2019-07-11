import { IAppState } from '../state/app.state';

export const selectSpinner = (state: IAppState) => state.loader;

// Not emitting property on hide
// export const isLoadingSpinnerActive = createSelector(
//     selectSpinner,
//     (state: ISpinnerState) => state.spinner.active
// );

export function isLoadingSpinnerActive(state: IAppState) {
    return state.loader.spinner.active;
}
