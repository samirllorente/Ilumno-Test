import { Action, createReducer, on } from '@ngrx/store';
import { Program } from './program.model';
import * as ProgramActions from './program.actions';

export const programFeatureKey = 'program';
export const initialState: ProgramState = {
    programs: []
};

export interface ProgramState {
    programs: Array<Program>;
}

const programReducer = createReducer(
    initialState,
    on(ProgramActions.GET_PROGRAMS_FAIL, (state: any) => state),
    on(ProgramActions.GET_PROGRAMS_SUCCESS, (state: any, { programs }: any) => ({
        ...state,
        programs
    }))
);

export function reducer(
    state: Program | undefined,
    action: Action
): Program {
    return programReducer(state, action);
}
