import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { birth, increase } from '../reducers/age.actions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  author = 'Emiel';
  
  store = inject(Store);

  // Kan ook met subscribe
  age$: Observable<number>;

  constructor() {
    this.age$ = this.store.select('age');  
  }

  birthday() {
    this.store.dispatch(increase());
  }

  birth() {
    this.store.dispatch(birth());
  }
}
