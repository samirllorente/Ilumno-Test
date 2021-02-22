import { createAction, props } from "@ngrx/store";
import { RegisterPayload } from './register.model';

export const CREATE_REGISTER = createAction(
    '[Register] Get programs',
    props<{ payload: RegisterPayload }>()
);
export const CREATE_REGISTER_FAIL = createAction('[Register] Get programs fail');
export const CREATE_REGISTER_SUCCESS = createAction('[Register] Get programs success');
