import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Program } from './program.model';
import * as ProgramActions from './program.actions';
import * as ProgramSelectors from './program.selector';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(
    private store: Store<Program>
  ) {}

  public getPrograms(): void {
      this.store.dispatch(ProgramActions.GET_PROGRAMS());
  }

  public getPrograms$(): Observable<Array<Program>> {
      return this.store.select(ProgramSelectors.getPrograms);
  }
}
