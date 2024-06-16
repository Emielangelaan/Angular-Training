import { Component } from '@angular/core';
import { CitiesComponent } from '../cities/cities.component';
import { CityBase } from '../city-base';

@Component({
  selector: 'app-city-photo',
  standalone: true,
  imports: [],
  templateUrl: './city-photo.component.html',
  styleUrl: './city-photo.component.css'
})
export class CityPhotoComponent extends CityBase {
  
}
