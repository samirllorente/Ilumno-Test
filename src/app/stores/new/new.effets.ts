import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { catchError, exhaustMap, map } from 'rxjs/operators';
import { config } from 'src/app/config/config';
import { environment } from 'src/environments/environment';

import {
    GET_NEWS,
    GET_NEWS_FAIL,
    GET_NEWS_SUCCESS
} from './new.actions';
import { New } from './new.model';

@Injectable()
export class NewEffects {

    constructor(
        private actions$: Actions,
        private http: HttpClient
    ) { }

    public getArena$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GET_NEWS),
            exhaustMap(() =>
                this.http
                    .get(environment.apiUrl + config.services.news)
                    .pipe(
                        map(this.resolveGetNewsSuccess as any),
                        catchError(this.resolveGetNewsFailure)
                    )
            )
        )
    );

    private resolveGetNewsSuccess = (response: Array<New>): any => {     
        return response
            ? GET_NEWS_SUCCESS({ news: response })
            : GET_NEWS_FAIL();
    }

    private resolveGetNewsFailure = (): Observable<any> =>
            of(GET_NEWS_FAIL());
}
