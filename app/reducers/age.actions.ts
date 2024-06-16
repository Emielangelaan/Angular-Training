import { createAction } from "@ngrx/store";

export const increase = createAction('[HomeComponent Increase] Leeftijd 1 jaar omhoog'); 
export const decrease = createAction('[HomeComponent Decrease] Leeftijd 1 jaar omlaag'); 
export const reset = createAction('[Home Reset] Leeftijd terug naar beginpunt');
export const birth = createAction('[Home Birth]');