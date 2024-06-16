import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { Student } from '../models/student';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addStudent } from '../reducers/student.actions';
import { studentsSelector, totalPoints } from '../reducers/student.reducer';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, FormsModule, StudentDetailsComponent, AsyncPipe],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  // names: Student[] = [];
  newName = '';

  student$: Observable<Student[]>;
  total$: Observable<number>;

  store = inject(Store);

  @ViewChild('nameInput')
  nameInput!: ElementRef;

  constructor() {
    this.student$ = this.store.select(studentsSelector);
    this.total$ = this.store.select(totalPoints);
  }

  ngOnInit() {
    // let lst = localStorage.getItem('nameList');

    // if (lst != null) {
    //  this.names = JSON.parse(lst);
    //  let index = this.names.length - 1;
    //  if (index > 0) {
    //   Student.maxId = this.names[index].id + 1;
    //  } else {
    //   Student.maxId = 1;
    //  }
    // }
  }

  validation(){
    return this.newName.length < 3;
  }
 
  addName() {
      // this.names.push(new Student(this.newName));
      // 
      // this.saveData();
      // 

      this.store.dispatch(addStudent(new Student(this.newName)));
      this.newName = '';
      this.nameInput.nativeElement.focus();
  }

  removeStudent(id: number) {
    // this.names = this.names.filter(s => s.id != id);
    // this.saveData();
  }

  // saveData() {
  //   // localStorage.setItem('nameList', JSON.stringify(this.names));
  // }

  // get total() {
  //   // let sum = 0;
    
  //   // for(let s of this.names) {
  //   //   sum += s.points;
  //   // }

  //   // return sum;
  // }

  removeName() {
    // const index = this.names.findIndex(s => s.name == this.newName)
    // if(index > -1) {
    //   this.names.splice(index, 1)
    //   this.newName = '';
    //   this.saveData();
    //   this.nameInput.nativeElement.focus();
    // } else {
    //   this.names.pop();
    //   this.saveData();
    // }
  }
}
