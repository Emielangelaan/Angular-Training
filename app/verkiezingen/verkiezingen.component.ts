import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Partij } from '../models/partij';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verkiezingen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verkiezingen.component.html',
  styleUrl: './verkiezingen.component.css'
})
export class VerkiezingenComponent {
  partijen: Partij[] = [];

  constructor(private http: HttpClient) { }

  url = 'https://xanderwemmers.nl/api/verkiezingen';

  get total() {
    let sum = 0;
    for(let partij of this.partijen) {
      sum += partij.Zetels;
    }
    return sum;
  }

  get coalition() {
    return this.partijen.filter(partij => partij.Selected)
  }

  get totalCoalition() {
    let sum = 0;
    for(let partij of this.coalition) {
      sum += partij.Zetels;
    }
    return sum;
  }

  get isMeerderheid() {
    return this.totalCoalition > this.total / 2;
  }
  
  get kleur(){
    return this.isMeerderheid ? 'green' : 'red';
  }

  get coalitionNames(){
    return this.coalition.map(partij => partij.VolledigeNaam);
  }

  ngOnInit() {
    this.getPartijen();
  }

  getPartijen() {
    return this.http.get<Partij[]>(this.url).pipe(map(data => data.sort((a,b) => a.Naam.localeCompare(b.Naam)))).subscribe(data => this.partijen = data);
  }
}
