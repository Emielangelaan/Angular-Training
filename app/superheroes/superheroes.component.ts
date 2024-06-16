import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Superhero } from '../models/superhero';

@Component({
  selector: 'app-superheroes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './superheroes.component.html',
  styleUrl: './superheroes.component.css'
})
export class SuperheroesComponent {

  heroes: Superhero[] = [];

  searchText = '';
  size = 'sm';
  gender = '';

  get filteredHeroes() {
    return this.heroes.filter(h => h.name.includes(this.searchText) && (this.gender == '' || h.appearance.gender == this.gender));
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Superhero[]>('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json').subscribe(data => this.heroes = data);
  }

  sortByIntelligence() {
    this.heroes.sort((a, b) => b.powerstats.intelligence - a.powerstats.intelligence);
  }

  sortByName() {
    this.heroes.sort((a, b) => a.name.localeCompare(b.name));
  }
}
