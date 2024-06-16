import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Student } from '../models/student';
import { Store } from '@ngrx/store';
import { deleteStudent, score } from '../reducers/student.actions';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {

  @Input({ required: true })
  Student!: Student;

  // @Output()
  // StudentRemove = new EventEmitter<number>();

  store = inject(Store);

  @Output()
  Score = new EventEmitter();

  removeClick() {
    // this.StudentRemove.emit(this.Student.id);
    this.store.dispatch(deleteStudent({ id: this.Student.id }));
  }

  score() {
    // this.Student.points++;
    this.store.dispatch(score({ id: this.Student.id }));
    this.Score.emit();
  }
}
