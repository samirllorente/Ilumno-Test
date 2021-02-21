import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { NewEffects } from 'src/app/stores/new/new.effets';
import { NewService } from 'src/app/stores/new/new.service';
import * as newStore from 'src/app/stores/new/new.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      NewEffects
    ]),
    StoreModule.forFeature(newStore.newFeatureKey, newStore.reducer)
  ],
  providers: [
    NewService
  ]
})
export class StoresModule { }
