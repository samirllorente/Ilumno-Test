import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { catchError, exhaustMap, map } from 'rxjs/operators';
import { config } from 'src/app/config/config';
import { environment } from 'src/environments/environment';

import {
    GET_PROGRAMS,
    GET_PROGRAMS_FAIL,
    GET_PROGRAMS_SUCCESS
} from './program.actions';
import { Program } from './program.model';

@Injectable()
export class ProgramEffects {

    constructor(
        private actions$: Actions,
        private http: HttpClient
    ) { }

    public getPrograms$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GET_PROGRAMS),
            exhaustMap(() =>
                this.http
                    .get(environment.apiUrl + config.services.programs)
                    .pipe(
                        map(this.resolveGetProgramsSuccess as any),
                        catchError(this.resolveGetProgramsFailure)
                    )
            )
        )
    );

    private resolveGetProgramsSuccess = (response: Array<Program>): any => {     
        return response
            ? GET_PROGRAMS_SUCCESS({ 
                programs: response.filter((item, pos) => response.map(x => x.id).indexOf(item.id) === pos)
            })
            : GET_PROGRAMS_FAIL();
    }

    private resolveGetProgramsFailure = (): Observable<any> =>
            of(GET_PROGRAMS_FAIL());
}
