import { createReducer, on } from "@ngrx/store";
import { birth, decrease, increase, reset } from "./age.actions";

const initialAge = 30;

export const ageReducer = createReducer(
    initialAge,
    on(increase, state => state + 1),
    on(decrease, state => state - 1),
    on(reset, state => initialAge),
    on(birth, state => 0)
);