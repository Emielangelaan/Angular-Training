import { createReducer, createSelector, on } from "@ngrx/store";
import { Student } from "../models/student";
import { addStudent, deleteStudent, score } from "./student.actions";
import { MyState } from ".";

const initialValue = [new Student('Tom'), new Student('Rolf')];

    export const studentReducer = createReducer(
        initialValue,
        on(addStudent, (state, student) => [...state, student]),
        on(deleteStudent, (state, args) => state.filter(s => s.id != args.id)),
        on(score, (state, args) => state.map(studenten => studenten.id == args.id ? {...studenten, points: studenten.points + 1} : studenten))
    );

    export const studentsSelector = (state: MyState) => state.student;
    export const totalPoints = createSelector(studentsSelector, list => list.reduce((sum, student) => sum += student.points, 0));