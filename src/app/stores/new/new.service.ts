import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { New } from './new.model';
import * as NewActions from './new.actions';
import * as NewSelectors from './new.selector';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(
    private store: Store<New>
  ) {}

  public getNews(): void {
      this.store.dispatch(NewActions.GET_NEWS());
  }

  public getNews$(): Observable<Array<New>> {
      return this.store.select(NewSelectors.getNew);
  }
}
