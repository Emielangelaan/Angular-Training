import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import * as L from 'leaflet';
import { NsService } from '../services/ns.service';
import { Station } from '../models/station';

@Component({
  selector: 'app-stationskaart',
  standalone: true,
  imports: [],
  templateUrl: './stationskaart.component.html',
  styleUrl: './stationskaart.component.css'
})
export class StationskaartComponent implements AfterViewInit {
  private map: any;

  @Output()
  StationClicked = new EventEmitter<Station>();

  private initMap(): void {

    this.map = L.map('map', {
      center: [ 52, 5.4 ],
      zoom: 6.5
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    this.service.getStations().subscribe(data => {
      // data.forEach()
      for(let station of data) {
        L.circle([station.Lat, station.Long],  { radius: 500 }).addTo(this.map).bindPopup(station.Name).on('click', s => {
          this.StationClicked.emit(station);
          this.map.flyTo([station.Lat, station.Long], 12);
        });
      }
    });

    // L.marker([52, 5.5]).addTo(this.map).bindPopup("Center van Nederland");

    // L.circle([53, 5.5], { radius: 10000 }).addTo(this.map);
  }

  flyHome(){
    navigator.geolocation.getCurrentPosition(result => {
      console.log(result);

      this.map.flyTo([result.coords.latitude, result.coords.longitude], 14);

      L.circle([result.coords.latitude, result.coords.longitude], { radius: result.coords.accuracy, color: 'green' }).addTo(this.map);
    });
  }

  constructor(private service: NsService) {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngDoCheck() {
    this.map?.invalidateSize();
  }
}
