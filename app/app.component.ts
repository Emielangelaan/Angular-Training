import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increase } from './reducers/age.actions';
import { totalPoints } from './reducers/student.reducer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-training';

  age$: Observable<number>;
  total$: Observable<number>;

  store = inject(Store);

  constructor() {
    this.age$ = this.store.select('age');
    this.total$ = this.store.select(totalPoints);
  }

  jarig() {
    this.store.dispatch(increase());
  }
}
