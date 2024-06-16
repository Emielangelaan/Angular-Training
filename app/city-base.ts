import { ActivatedRoute, Router } from "@angular/router";
import { City } from "./models/city";
import { CitiesService } from "./services/cities.service";
import { inject } from "@angular/core";

export class CityBase {
    city: City = new City(0, '', '', 0, 2024, '');
    id: number = 0;    

    private route = inject(ActivatedRoute);
    private router = inject(Router);
    protected service = inject(CitiesService);

    constructor() { 
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        this.service.getCityById(this.id).subscribe((data: any) => this.city = data);
    }

    goBack() {
        this.router.navigateByUrl('/cities');
    }
}
