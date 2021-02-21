import { createFeatureSelector, createSelector } from "@ngrx/store";
import { newFeatureKey, NewState } from "./new.reducer";

export const getNewState = createFeatureSelector<NewState>(newFeatureKey);

export const getNew = createSelector(
    getNewState,
    (state: NewState) => state.news
);
