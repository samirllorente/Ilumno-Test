import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { NewEffects } from 'src/app/stores/new/new.effets';
import { ProgramEffects } from 'src/app/stores/program/program.effets';
import { RegisterEffects } from 'src/app/stores/register/register.effets';

import { NewService } from 'src/app/stores/new/new.service';
import { ProgramService } from 'src/app/stores/program/program.service';
import { RegisterService } from 'src/app/stores/register/register.service';

import * as newStore from 'src/app/stores/new/new.reducer';
import * as programStore from 'src/app/stores/program/program.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      NewEffects,
      ProgramEffects,
      RegisterEffects
    ]),
    StoreModule.forFeature(newStore.newFeatureKey, newStore.reducer),
    StoreModule.forFeature(programStore.programFeatureKey, programStore.reducer),
  ],
  providers: [
    NewService,
    ProgramService,
    RegisterService
  ]
})
export class StoresModule { }
