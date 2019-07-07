import { EError, ErrorActions } from '../actions/error.action';
import { initialErrorState, IErrorState } from '../state/error.state';

export function errorReducer(
    state = initialErrorState,
    action: ErrorActions
): IErrorState {
    switch (action.type) {
      case EError.AddError: {
        return {
            ...state,
            error: action.payload.message
        };
      }
      default:
        return state;
    }
}
