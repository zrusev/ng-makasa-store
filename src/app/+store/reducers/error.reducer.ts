import { EError, ErrorActions } from '../actions/error.action';
import { initialErrorState, IErrorState } from '../state/error.state';

export const errorReducer = (
    state = initialErrorState,
    action: ErrorActions
): IErrorState => {
    switch (action.type) {
      case EError.AddError: {
        return {
            ...state,
            error: action.payload
        };
      }
      default:
        return state;
    }
};
