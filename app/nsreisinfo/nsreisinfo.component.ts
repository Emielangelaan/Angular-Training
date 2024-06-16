import { Component, Input } from '@angular/core';
import { StationslijstComponent } from '../stationslijst/stationslijst.component';
import { VertrektijdenComponent } from '../vertrektijden/vertrektijden.component';
import { Station } from '../models/station';
import { StationskaartComponent } from '../stationskaart/stationskaart.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nsreisinfo',
  standalone: true,
  imports: [StationslijstComponent, VertrektijdenComponent, CommonModule, FormsModule, StationskaartComponent],
  templateUrl: './nsreisinfo.component.html',
  styleUrl: './nsreisinfo.component.css'
})
export class NsreisinfoComponent {

  showMap = true;

  currentStation: Station | null = null;

  onStationClicked(station: Station) {
    this.currentStation = station
  }
}
