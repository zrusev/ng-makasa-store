import { ISpinner } from 'src/app/core/models/spinner';

export interface ISpinnerState {
    spinner: ISpinner;
}

export const initialSpinnerState: ISpinnerState = {
    spinner: {
        active: 0,
        actionsInProgress: []
    }
};
