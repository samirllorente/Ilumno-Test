import { Action, createReducer, on } from '@ngrx/store';
import { New } from './new.model';
import * as NewActions from './new.actions';

export const newFeatureKey = 'new';
export const initialState: Array<New> = [];

export interface NewState {
    news: Array<New>;
}

const newReducer = createReducer(
    initialState,
    on(NewActions.GET_NEWS_FAIL, (state: any) => state),
    on(NewActions.GET_NEWS_SUCCESS, (state: any, { news }: any) => ({
        ...state,
        news
    }))
);

export function reducer(
    state: New | undefined,
    action: Action
): New {
    return newReducer(state, action);
}
