import { Component, OnDestroy, OnInit } from '@angular/core';
import { City } from '../models/city';
import { CitiesService } from '../services/cities.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent implements OnInit, OnDestroy {
 
  cities: City[] = [];
  intervalId: any;

  constructor(private service: CitiesService) {}

  ngOnInit() {
    this.intervalId = setInterval(() => this.getCities(), 5000);
    this.getCities();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  getCities() {
    this.service.getCities().subscribe((data: any) => this.cities = data);
  }

  deleteCity(id : number) {
    this.service.deleteCityById(id).subscribe(data => this.ngOnInit())
  }

  sortById() {
    this.cities.sort((a, b) => a.CityID - b.CityID);
  }

  sortByName() {
    this.cities.sort((a, b) => a.CityName.localeCompare(b.CityName));
  }

  sortByCountry() {
    this.cities.sort((a, b) => a.Country.localeCompare(b.Country));
  }

  sortByPopulation() {
    this.cities.sort((a, b) => a.Population - b.Population);
  }

  sortByYear() {
    this.cities.sort((a, b) => a.Year - b.Year);
  }
}
