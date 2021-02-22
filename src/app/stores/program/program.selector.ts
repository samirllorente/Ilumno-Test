import { createFeatureSelector, createSelector } from "@ngrx/store";
import { programFeatureKey, ProgramState } from "./program.reducer";

export const getProgramState = createFeatureSelector<ProgramState>(programFeatureKey);

export const getPrograms = createSelector(
    getProgramState,
    (state: ProgramState) => state.programs
);
