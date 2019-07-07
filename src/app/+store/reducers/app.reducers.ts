import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { promotionReducers } from './promotion.reducers';
import { errorReducer } from './error.reducer';

export function appReducers(): ActionReducerMap<IAppState, any> {
    return {
        router: routerReducer,
        promotions: promotionReducers,
        error: errorReducer
    };
}

