import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../models/city';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }

url = 'https://xanderwemmers.nl/api/cities/';

  getCities() {
    return this.http.get<City[]>(this.url)
    .pipe(map(list => list.sort((a, b) => a.CityID - b.CityID))    )
  }

  getCityById(id: number) {
    return this.http.get<City>(this.url + id);
  }

  editCity(city: City) {
    return this.http.put(this.url + city.CityID, city);    
  }

  addCity(city: City) {
    return this.http.post<City>(this.url, city);
  }

  deleteCityById(id: number) {
    return this.http.delete(this.url + id);
  }
}
