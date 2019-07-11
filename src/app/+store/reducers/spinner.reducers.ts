import { ESpinnerActions, SpinnerActions } from '../actions/spinner.action';
import { ISpinnerState, initialSpinnerState } from '../state/spinner.state';

export function spinnerReducer(
    state = initialSpinnerState,
    action: SpinnerActions
): ISpinnerState {
    switch (action.type) {
        case ESpinnerActions.ShowSpinner: {
            const isActionAlreadyInProgress = state.spinner.actionsInProgress
                .filter((currentAction: any) => currentAction === action.payload.type)
                .length;

            if (isActionAlreadyInProgress) {
                return state;
            }

            const newActionsInProgress = [
                ...state.spinner.actionsInProgress,
                action.payload.type
            ];

            return Object.assign(state, {
                spinner: {
                    active: newActionsInProgress.length,
                    actionsInProgress: newActionsInProgress
                }
            });
        }

        case ESpinnerActions.HideSpinner: {
            const newActionsInProgress = action.payload.triggerAction ?
                state.spinner.actionsInProgress
                    .filter((currentAction: any) => currentAction !== action.payload.triggerAction) :
                state.spinner.actionsInProgress;

            return Object.assign(state, {
                spinner: {
                    actionsInProgress: newActionsInProgress,
                    active: state.spinner.active > 0 ? newActionsInProgress.length : 0
                }
            });
        }

        default:
            return state;
    }
}

