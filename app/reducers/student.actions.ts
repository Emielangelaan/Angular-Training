import { createAction, props } from "@ngrx/store";
import { Student } from "../models/student";

export const addStudent = createAction('[StudentsComponent AddStudent]', props<Student>());
export const deleteStudent = createAction('[StudentComponent DeleteStudent]', props<{id:number}>());
export const score = createAction('[StudentComponent Score]', props<{id:number}>()); 