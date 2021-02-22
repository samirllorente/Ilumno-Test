import { createAction, props } from "@ngrx/store";
import { Program } from './program.model';

export const GET_PROGRAMS = createAction('[Program] Get programs');
export const GET_PROGRAMS_FAIL = createAction('[Program] Get programs fail');
export const GET_PROGRAMS_SUCCESS = createAction(
    '[Program] Get programs success',
    props<{ programs: Array<Program> }>()
);
