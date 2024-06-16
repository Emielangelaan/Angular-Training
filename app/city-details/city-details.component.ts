import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CityBase } from '../city-base';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-city-details',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './city-details.component.html',
  styleUrl: './city-details.component.css'
})
export class CityDetailsComponent extends CityBase {
  errorMessage = '';

  saveCity() {
    let handler = {
      next: (data: any) => this.goBack(),
      error: (data:any) => {
        if (data.error.errors) {
          this.errorMessage = data.error.errors.Year[0]
        } else {
          this.errorMessage = data.error;
        }
      }
    }
    if (this.city.CityID == 0) {
      this.service.addCity(this.city).subscribe(handler);
    } else {
      this.service.editCity(this.city).subscribe(handler);
    }
  }
  
  deleteCity() {
    this.service.deleteCityById(this.id).subscribe(data => this.goBack());
  }
}
