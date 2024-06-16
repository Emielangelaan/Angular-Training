import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { ageReducer } from './age.reducers';
import { studentReducer } from './student.reducer';
import { Student } from '../models/student';

export interface MyState {
    age: number,
    student : Student[]
}

export const reducers: ActionReducerMap<MyState> = {
  age: ageReducer,
  student: studentReducer
};


export const metaReducers: MetaReducer<MyState>[] = isDevMode() ? [] : [];
