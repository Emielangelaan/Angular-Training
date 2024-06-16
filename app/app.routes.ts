import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { SuperheroesComponent } from './superheroes/superheroes.component';
import { CitiesComponent } from './cities/cities.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { CityPhotoComponent } from './city-photo/city-photo.component';
import { NsreisinfoComponent } from './nsreisinfo/nsreisinfo.component';
import { VerkiezingenComponent } from './verkiezingen/verkiezingen.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'students',
        component: StudentsComponent
    },
    {
        path: 'superheroes',
        component: SuperheroesComponent
    },
    {
        path: 'cities',
        component: CitiesComponent
    },
    {
        path: 'cities/:id',
        component: CityDetailsComponent
    },
    {
        path: 'cities/:id/photo',
        component: CityPhotoComponent
    },
    {
        path: 'nsreisinfo',
        component: NsreisinfoComponent
    },
    {
        path: 'verkiezingen',
        component: VerkiezingenComponent
    }
];
