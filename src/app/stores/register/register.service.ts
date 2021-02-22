import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { RegisterPayload } from './register.model';
import * as RegisterActions from './register.actions';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private store: Store<any>
  ) {}

  public createRegister(payload: RegisterPayload): void {
      this.store.dispatch(RegisterActions.CREATE_REGISTER({payload}));
  }
}
