import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { catchError, exhaustMap, map } from 'rxjs/operators';
import { config } from 'src/app/config/config';
import { environment } from 'src/environments/environment';

import {
    CREATE_REGISTER,
    CREATE_REGISTER_FAIL,
    CREATE_REGISTER_SUCCESS
} from './register.actions';
import { RegisterPayload } from './register.model';

@Injectable()
export class RegisterEffects {

    constructor(
        private actions$: Actions,
        private http: HttpClient
    ) { }

    public createRegister$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CREATE_REGISTER),
            exhaustMap((props: {payload: RegisterPayload}) =>
                this.http
                    .post(environment.apiUrl + config.services.logup, props.payload)
                    .pipe(
                        map(this.resolveCreateRegisterSuccess),
                        catchError(this.resolveCreateRegisterFailure)
                    )
            )
        )
    );

    private resolveCreateRegisterSuccess = (response: any): any => {     
        return CREATE_REGISTER_SUCCESS();
    }

    private resolveCreateRegisterFailure = (): Observable<any> =>
            of(CREATE_REGISTER_FAIL());
}
