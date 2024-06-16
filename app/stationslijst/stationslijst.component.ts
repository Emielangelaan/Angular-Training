import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Station } from '../models/station';
import { NsService } from '../services/ns.service';

@Component({
  selector: 'app-stationslijst',
  standalone: true,
  imports: [],
  templateUrl: './stationslijst.component.html',
  styleUrl: './stationslijst.component.css'
})
export class StationslijstComponent implements OnInit{

  @Output()
  StationClicked = new EventEmitter<Station>();

  stations: Station[] = [];

  constructor(private service: NsService) {}

  ngOnInit() {
    this.getStations();
  }

  getStations() {
    this.service.getStations().subscribe((data: any) => this.stations = data);
  }

  stationClick(station: Station) {
    this.StationClicked.emit(station);
  }
}
